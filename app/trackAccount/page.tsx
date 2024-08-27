'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export const TrackAccount = () => {
  const [address, setAddress] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [allTrackAddress, setAllTrackAddress] = useState<{ id: number, address: string, amount: number }[]>([])
  const [updatedAmount, setUpdatedAmount] = useState<number>(0)

  const { data: session } = useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/accounts/trackAddress?userId=${userId}`)
        setAllTrackAddress(response.data.data)
      } catch (error) {
        console.error('Error fetching tracked addresses:', error);
      }
    }
    if (userId) {
      fetchData();
    }
  }, [userId])

  const updateAmount = async (id: number) => {
    try {
      await axios.patch('http://localhost:3001/api/v1/accounts/trackAddress', { id, amount: updatedAmount })
      setAllTrackAddress(allTrackAddress.map(item => item.id === id ? { ...item, amount: updatedAmount } : item))
    } catch (error) {
      console.error('Error updating amount:', error);
    }
  }

  const deleteTrackAddress = async (id: number) => {
    try {
      await axios.delete('http://localhost:3001/api/v1/accounts/trackAddress', { data: { id } })
      setAllTrackAddress(allTrackAddress.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  }

  const addAccount = async () => {
    try {
      if (userId) {
        const response = await axios.post(`http://localhost:3001/api/v1/accounts/trackAddress?userId=${userId}`, { address, amount })
        setAllTrackAddress([...allTrackAddress, response.data.data])
        setAmount(0)
        setAddress('')
      }
    } catch (error) {
      console.error('Error adding account:', error);
    }
  }

  return (
    <div>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter Amount" />
      <button onClick={addAccount}>Add Account</button>

      <ul>
        {allTrackAddress.map((item) => (
          <li key={item.id}>
            {item.address} - {item.amount}
            <input
              type="number"
              value={updatedAmount}
              onChange={(e) => setUpdatedAmount(Number(e.target.value))}
              placeholder="Update Amount"
            />
            <button onClick={() => updateAmount(item.id)}>Update</button>
            <button onClick={() => deleteTrackAddress(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

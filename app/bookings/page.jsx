import React from 'react'
import Heading from '@/components/Heading'
import getMyBookings from '../actions/getMyBookings'
import BookedRoomCard from '@/components/BookedRoomCard'



const page = async () => {
  const bookings = await getMyBookings()

  return (
    <>
    {bookings.length === 0 ? (
      <p className='text-gray-600 mt-4'>You have no bookings.</p>
    ) : (
      bookings.map((booking,index) => (<BookedRoomCard booking={booking} key={index}/>))
    )}
    </>
  )
}

export default page

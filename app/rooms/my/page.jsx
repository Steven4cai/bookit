import React from 'react'
import Heading from '@/components/Heading'
import getMyRooms from '@/app/actions/getMyRooms'
import MyRoomCard from '@/components/MyRoomCard'


const page = async () => {
    const rooms = await getMyRooms()
  return (
    <>
      <Heading title = {"My Rooms"} />
      {rooms.length > 0 ? (
        rooms.map((room,index) => (<MyRoomCard room={room} key={index}/>))
      ) : 
      (<p>You have no room lists</p>)}
    </>
  )
}

export default page

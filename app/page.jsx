import getAllRooms from './actions/getAllRooms';
import RoomCard from '@/components/RoomCard';
import Heading from '@/components/Heading';
import { revalidatePath } from 'next/cache';

export default async function Home() {
  const rooms = await getAllRooms()
  return (
   <>
   <Heading title={'Available Rooms'}/>
   {rooms.length > 0 ? (
    rooms.map((room,index) => (
      <RoomCard room = {room} key={index}/>
    ))
   ) : (<p>no rooms available at the moment</p>)}
   </>
  );
}

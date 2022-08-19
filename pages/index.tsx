import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import {MainLayout} from '../components/layouts'

const Home: NextPage = () => {
  return (
    <>
    <MainLayout title="Mi primera APP">
      <Button>Hola Mundo</Button>
      </MainLayout>
    </>
  )
}

export default Home

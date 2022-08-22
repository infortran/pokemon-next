import { Container, Image, Link, Spacer, Text, useTheme } from "@nextui-org/react"
import { useRouter } from "next/router"
import NextLink from 'next/link'



export const Navbar = () => {
    const { theme } = useTheme()
    // const router = useRouter()
    // const redirectHome = () => {
    //     router.push('/')
    // }

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0 20px',
                backgroundColor: theme?.colors.gray100.value,

            }}


        >

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
            {/* <div style={{ display:'flex', alignItems: 'center',cursor:'pointer'}}
                onClick={ redirectHome }
            >

                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
                    alt="icono de la app"
                    width={70}
                    height={70}
                />
                
            </div> */}

            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <Text color="white">Favoritos</Text>
        </div>
    )
}

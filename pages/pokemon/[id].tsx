import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { pokeApi } from "../../api"
import { MainLayout } from "../../components/layouts"
import { Pokemon } from "../../interfaces"

interface Props{
    pokemon: Pokemon
}

const PokemonPage: FC<Props> = ({pokemon}) => {

    console.log(pokemon)
    return (
        <MainLayout>
            <h1>{pokemon.name}</h1>
        </MainLayout>
    )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemonCount = [...Array(151)].map((e, i ) => `${i + 1}`)
    return {
        paths: pokemonCount.map(id => ({
            params:{ id }
        })),
        fallback:false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as { id: string }

    const { data } = await pokeApi.get(`/pokemon/${ id }`)
    return {
        props: {
            pokemon: data
        }
    }
}
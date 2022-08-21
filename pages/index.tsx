
import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { MainLayout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = (props) => {
	
	return (
		<>
			<MainLayout title="Listado de pokemons">
				<Grid.Container gap={2} justify='flex-start'>
					{
						props.pokemons.map(({ id, name, img }) => (
							<PokemonCard id={id} name={name} img={img} key={id} />
						))
					}

				</Grid.Container>
			</MainLayout>
		</>
	)
}


export const getStaticProps: GetStaticProps = async (ctx) => {

	const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')
	const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}))
	return {
		props: {
			pokemons
		}, // will be passed to the page component as props
	}
}

export default Home

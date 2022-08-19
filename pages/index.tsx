
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { MainLayout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
	pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = (props) => {
	console.log(props)
	return (
		<>
			<MainLayout title="Listado de pokemons">
				<ul>
					{
						props.pokemons.map((pokemon, i) => <li key={i}>{i + 1} - {pokemon.name}</li>)
					}
					
				</ul>
			</MainLayout>
		</>
	)
}


export const getStaticProps: GetStaticProps = async (ctx) => {
	
	const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')
	
	return {
		props: {
			pokemons: data.results
		}, // will be passed to the page component as props
	}
}

export default Home

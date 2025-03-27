import Header from "../components/Header"
import Footer from "../components/Footer"

function Estatisticas() {
	const allSubmissions = JSON.parse(sessionStorage.getItem("submissions"))

	const artistStats = allSubmissions
		.map(s => s.artistas)
		.flat()
		.reduce((acc, curr) => {
			acc[curr] ??= 0
			acc[curr]++
			return acc
		}, {})

	const scheduleStats = allSubmissions.reduce((acc, curr) => {
		acc[curr.dataHora] ??= 0
		acc[curr.dataHora]++
		return acc
	}, {})

	return (
		<div className="page-wrapper">
			<Header />
			<main className="main-content">
				<h2>Estatísticas dos Inquéritos</h2>

				{allSubmissions.length === 0 ? (
					<p>Ainda não há submissões para exibir estatísticas.</p>
				) : (
					<>
						<h3>Artistas preferidos:</h3>
						<ul>
							{Object.entries(artistStats).map(([artista, times]) => (
								<li key={artista}>
									{artista}: {times === 1 ? "1 vez" : `${times} vezes`}
								</li>
							))}
						</ul>

						<h3>Horários preferidos:</h3>
						<ul>
							{Object.entries(scheduleStats).map(([horario, times]) => (
								<li key={horario}>
									{horario}: {times === 1 ? "1 vez" : `${times} vezes`}
								</li>
							))}
						</ul>

						<h3>Críticas submetidas:</h3>
						<ul>
							{allSubmissions
								.filter(s => s.criticas)
								.map((submission, index) => (
									<li key={index}>{submission.criticas}</li>
								))}
						</ul>
					</>
				)}
			</main>
			<Footer />
		</div>
	)
}

export default Estatisticas

import React from "react";

function Horarios() { 
    return (
        <section id="horarios">
			<h2>Horários</h2>
			<table border="1">
				<tr>
					<th rowspan="3">21 de agosto</th>
					<td>21h45</td>
					<td>GNR</td>
				</tr>
				<tr>
					<td>23h15</td>
					<td>AMÁLIA HOJE</td>
				</tr>
				<tr>
					<td>01H00</td>
					<td>DELFINS</td>
				</tr>

				<tr>
					<th rowspan="3">22 de agosto</th>
					<td>21h00</td>
					<td>SOULFLY</td>
				</tr>
				<tr>
					<td>22h30</td>
					<td>XUTOS & PONTAPÉS</td>
				</tr>
				<tr>
					<td>00h15</td>
					<td>THE CULT</td>
				</tr>
				<tr>
					<th rowspan="3">23 de agosto</th>
					<td>21h15</td>
					<td>CRYSTAL FIGHTERS</td>
				</tr>
				<tr>
					<td>22H45</td>
					<td>ORNATOS VIOLETA</td>
				</tr>
				<tr>
					<td>00h30</td>
					<td>DIE ANTWOORD</td>
				</tr>
				<tr>
					<th rowspan="3">24 de agosto</th>
					<td>21h15</td>
					<td>THE WATERBOYS</td>
				</tr>
				<tr>
					<td>23h00</td>
					<td>THE LIBERTINES</td>
				</tr>
				<tr>
					<td>00h45</td>
					<td>THE DARKNESS</td>
				</tr>
			</table>
		</section>
    )
}

export default Horarios
import React from "react";
import Tx from "./Tx";

export default class Txs extends React.Component {
	render() {
		const txs = this.props.txs;
		return (
			<table>
				<thead>
					<tr>
						<th>Valor</th>
						<th>Fecha</th>
						<th>Concepto</th>
					</tr>
				</thead>
				<tbody>
					{
						txs.map(tx =>
							<Tx key={tx.id} {...tx} />
						)
					}
				</tbody>	
			</table>
		);
	}
}

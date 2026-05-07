export function formatCurrency(priceInCents: number) {
	return (priceInCents / 100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
}

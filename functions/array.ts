export function embaralhar(items: any[]): any[] {
    return items.map( valorItem => ( {valorItem, numAleatorio: Math.random()} ) )
                .sort( (valorObj1, valorObj2) => valorObj1.numAleatorio - valorObj2.numAleatorio )
                .map( obj => obj.valorItem)
}
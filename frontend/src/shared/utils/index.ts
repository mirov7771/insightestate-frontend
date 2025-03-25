export const formatNumber = (q: number | undefined) => {
    if (!q)
        return undefined
    return q.toLocaleString('ru-RU', {
        trailingZeroDisplay: "stripIfInteger",
    })
}

import { FullCandyDetails } from '../../types/candy_info'
import styles from './styles.module.css'
import { useMemo } from "react"

type Props = {
    candy: FullCandyDetails
}

type CandyDisplayInfo = {
  totalSupply: number,
  supplyMinted: number,
  price: number,
  startDate: Date | null,
  endDate: Date | null,
  groups: CandyDisplayGroup[]
}

type CandyDisplayGroup = {
  label: string,
  totalSupply: number,
  price: number,
  startDate: Date | null,
  endDate: Date | null,
} 

export default function MintGroupsDetails({ candy: { candy, guard } }: Props) {

    const candyDisplay: CandyDisplayInfo = useMemo(() => {
        const totalSupply = Number(guard.guards.redeemedAmount.__option === "Some" ? guard.guards.redeemedAmount.value.maximum.toString() : candy.data.itemsAvailable.toString())
        const supplyMinted = Number(candy.itemsRedeemed.toString())
        const price = guard.guards.solPayment.__option === "Some" ? Number(guard.guards.solPayment.value.lamports.basisPoints.toString()) / 1_000_000_000 : 0
        const startDate = guard.guards.startDate.__option === "Some" ? new Date(Number(guard.guards.startDate.value.date.toString()) * 1000) : null
        const endDate = guard.guards.endDate.__option === "Some" ? new Date(Number(guard.guards.endDate.value.date.toString()) * 1000) : null

        const groups: CandyDisplayGroup[] = []

        guard.groups.forEach(g => {

            const groupTotalSupply = Number(g.guards.redeemedAmount.__option === "Some" ? g.guards.redeemedAmount.value.maximum.toString() : totalSupply)
            const groupPrice = g.guards.solPayment.__option === "Some" ? Number(g.guards.solPayment.value.lamports.basisPoints.toString()) / 1_000_000_000 : price
            const groupStartDate = g.guards.startDate.__option === "Some" ? new Date(Number(g.guards.startDate.value.date.toString()) * 1000) : startDate
            const groupEndDate = g.guards.endDate.__option === "Some" ? new Date(Number(g.guards.endDate.value.date.toString()) * 1000) : endDate
            
            groups.push({
            label: g.label,
            price: groupPrice,
            totalSupply: groupTotalSupply,
            endDate: groupEndDate,
            startDate: groupStartDate
            })
        })

        return {
            totalSupply,
            supplyMinted,
            price,
            endDate,
            startDate,
            groups
        }
    }, [candy])

    return (
        <>
        {
            candyDisplay.groups.length === 0
            ?
            <div className={styles.phase}>
              <p>
                Label:
              </p>
              <p>
                Price:
              </p>
              <p>
                Start:
              </p>
              <p>
                End:
              </p>
              <p>
                -
              </p>
              <p>
                {candyDisplay.price.toString()} SOL
              </p>
              <p>
                {candyDisplay.startDate?.toDateString() || '-'}
              </p>
              <p>
                {candyDisplay.endDate?.toDateString() || '-'}
              </p>
            </div>
            :
            candyDisplay.groups.map(g => (
              <div className={styles.phase} key={g.label}>
              <p>
                Label:
              </p>
              <p>
                Price:
              </p>
              <p>
                Start:
              </p>
              <p>
                End:
              </p>
              <p>
                {g.label}
              </p>
              <p>
                {g.price.toString()} SOL
              </p>
              <p>
                {g.startDate?.toDateString() || '-'}
              </p>
              <p>
                {g.endDate?.toDateString() || '-'}
              </p>
            </div>
            ))
        }
        </>
    )
}
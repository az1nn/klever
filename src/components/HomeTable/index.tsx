import React, { Children } from 'react'
import styled from 'styled-components'

const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const TableContent = styled.div`
  display: flex;
  flex-direction: column;
`

const HomeTable = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return (
    <table>
      <TableHeader>
        <tr>
          <th>Tokens</th>
          <th>Balance</th>
        </tr>
      </TableHeader>
      <TableContent>
        {props.children}
      </TableContent>
    </table>
  )
}

export default HomeTable
import { EditIcon, TableRow, TableText } from "./styles"

import EditSvg from "../../assets/fa-solid_edit.svg"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export const TokensList = (props: { data: any }) => {
  const data = props.data

  return (
    <div>
      {data.map((token: { TokenName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; TotalTokens: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
        return (
          <TableRow>
            <div onClick={() => console.log('ainda label')} >
              <EditIcon src={EditSvg} />
            </div>
            <TableText>{token.TokenName}</TableText>
            <TableText>{token.TotalTokens}</TableText>
          </TableRow>
        )   
      })}
    </div>
  )
}

export default TokensList
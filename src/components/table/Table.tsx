import { FC } from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { User } from "../../utils/interfaces";

interface Props {
  userInfo: User;
}

export const Table: FC<Props> = ({
  userInfo: {
    maidenName,
    email,
    phone,
    university,
    weight,
    birthDate,
    bloodGroup,
    domain,
    ein,
    eyeColor,
    gender,
    height,
    macAddress,
  },
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 1 } }}>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">maidenName</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">university</TableCell>
            <TableCell align="right">weight</TableCell>
            <TableCell align="right">birthDate</TableCell>
            <TableCell align="right">bloodGroup</TableCell>
            <TableCell align="right">domain</TableCell>
            <TableCell align="right">ein</TableCell>
            <TableCell align="right">eyeColor</TableCell>
            <TableCell align="right">gender</TableCell>
            <TableCell align="right">height</TableCell>
            <TableCell align="right">macAddress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={email}
            sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
          >
            <TableCell component="th" scope="row">
              {email}
            </TableCell>
            <TableCell align="right">{maidenName}</TableCell>
            <TableCell align="right">{phone}</TableCell>
            <TableCell align="right">{university}</TableCell>
            <TableCell align="right">{weight}</TableCell>
            <TableCell align="right">{birthDate}</TableCell>
            <TableCell align="right">{bloodGroup}</TableCell>
            <TableCell align="right">{domain}</TableCell>
            <TableCell align="right">{ein}</TableCell>
            <TableCell align="right">{eyeColor}</TableCell>
            <TableCell align="right">{gender}</TableCell>
            <TableCell align="right">{height}</TableCell>
            <TableCell align="right">{macAddress}</TableCell>
          </TableRow>
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

import { FC, useEffect, useState } from "react";
import BaseTable from "react-base-table";
import axios from "axios";
import "react-base-table/styles.css";

import {
  Pagination,
  Typography,
  Box as BoxMUI,
  useMediaQuery,
} from "@mui/material";
import { Table } from "../components/table";
import { Modal } from "../components/modalUser";

import {
  RowEventHandlersProps,
  User,
  usersInitialData,
  columns,
} from "../utils";

const UsersTable: FC = () => {
  //
  const [users, setUsers] = useState<User[]>([]);
  const [userInfo, setUserInfo] = useState<User>(usersInitialData);
  const [recordsPerPage] = useState<number>(12);
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const matchesMobile = useMediaQuery("(max-width:640px)");

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(users.length / recordsPerPage);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data?.users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setOpen(false);

  const rowEventHandlers = {
    onClick: ({ rowData }: RowEventHandlersProps) => {
      setUserInfo(rowData);
      setOpen(true);
    },
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <BoxMUI
      display="flex"
      overflow="hidden"
      flexDirection="column"
      alignItems={matchesMobile ? "unset" : "center"}
    >
      <Typography textAlign="center" variant="h2" m={8}>
        Users
      </Typography>
      <BoxMUI flex={1} overflow={matchesMobile ? "scroll" : "hidden"}>
        <BaseTable
          columns={columns}
          data={currentRecords}
          width={800}
          height={660}
          rowEventHandlers={rowEventHandlers}
        />
      </BoxMUI>
      <BoxMUI display="flex" justifyContent="center" mt={5} mb={10}>
        <Pagination count={nPages} onChange={(e, p) => setCurrentPage(p)} />
      </BoxMUI>
      <Modal open={open} onClose={handleClose}>
        <Table userInfo={userInfo} />
      </Modal>
    </BoxMUI>
  );
};

export default UsersTable;

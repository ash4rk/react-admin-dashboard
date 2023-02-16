import { useMediaQuery } from "@mui/material";
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  SimpleList,
  UrlField,
} from "react-admin";
import { MyUrlField } from "./MyUrlField";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

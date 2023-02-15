import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  EditButton,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

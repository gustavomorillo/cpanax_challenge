import { Column } from "react-base-table";
import { Node } from "reactflow";

export const columns = [
  {
    key: "id",
    title: "ID",
    dataKey: "id",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "firstName",
    title: "First Name",
    dataKey: "firstName",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "lastName",
    title: "Last Name",
    dataKey: "lastName",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "age",
    title: "age",
    dataKey: "age",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "username",
    title: "username",
    dataKey: "username",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "ip",
    title: "ip",
    dataKey: "ip",
    width: 150,
    resizable: true,
    sortable: true,
    editable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "image",
    title: "image",
    dataKey: "image",
    width: 150,
    cellRenderer: ({ cellData: image }: { cellData: string }) => (
      <img src={image} width={100} height={100} alt={image} />
    ),
    resizable: true,
    sortable: true,
    editable: true,
    align: Column.Alignment.CENTER,
    frozen: Column.FrozenDirection.LEFT,
  },
];

export const initialNodes: Node[] = [
  {
    id: "inicio",
    type: "custom",
    data: { label: "Inicio - Info de la Pagina" },
    position: { x: 0, y: 0 },
  },
  {
    id: "about",
    type: "custom",
    data: { label: "Acerca de - Info de la Pagina" },
    position: { x: 0, y: 100 },
  },
  {
    id: "product",
    type: "custom",
    data: { label: "Productos - Info de la Pagina" },
    position: { x: 0, y: 200 },
  },
  {
    id: "shop",
    type: "custom",
    data: { label: "Tienda - Info de la Pagina " },
    position: { x: 0, y: 300 },
  },
  {
    id: "blog",
    type: "custom",
    data: { label: "Blogs - Info de la Pagina" },
    position: { x: 0, y: 400 },
  },
  {
    id: "header",
    type: "custom",
    data: { label: "Header - Control interno de la pagina" },
    position: { x: 200, y: 0 },
  },
  {
    id: "container",
    type: "custom",
    data: { label: "Container - Control interno de la pagina" },
    position: { x: 200, y: 100 },
  },
  {
    id: "content",
    type: "custom",
    data: { label: "Content - Control interno de la pagina" },
    position: { x: 200, y: 200 },
  },
  {
    id: "footer",
    type: "custom",
    data: { label: "Footer - Control interno de la pagina" },
    position: { x: 200, y: 300 },
  },
  {
    id: "menu",
    type: "custom",
    data: { label: "Menu - Control interno de la pagina" },
    position: { x: 200, y: 400 },
  },
];

export const usersInitialData = {
  id: 0,
  firstName: "",
  lastName: "",
  maidenName: "",
  age: 0,
  gender: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  birthDate: "",
  bloodGroup: "",
  height: 0,
  weight: 0,
  eyeColor: "",
  domain: "",
  ip: "",
  macAddress: "",
  university: "",
  ein: "",
  ssn: "",
  userAgent: "",
};

export const initialNodeInfo = {
  id: "",
  name: "",
  description: "",
};

export const NEW_NODE_LABEL = "New node - Generic Node";

export const ADD_BUTTON_NODE = "Add Node";

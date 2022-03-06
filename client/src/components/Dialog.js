/* eslint-disable */
import { useContext, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Dialog,
  IconButton,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { AppContext } from "../App";
import axios from "axios";

const SortValue = ["id", "price", "size"];

export function DialogModal(props) {
  const { setProductList, sort, setSort, setPage, setHasMorePages } = useContext(AppContext);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setSort(value); 
    onClose(value);
  };

  // if sort value changes reload product list
  useEffect(() => {
    const reloadProducts = async () => {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/products?_page=1&_limit=20&_sort=${sort}`
        );
        setProductList([...data?.data]);
        setHasMorePages(data?.data.length > 0);
        setPage(1);
      } catch (error) {
        console.log(error);
      }
    };

    reloadProducts();
  }, [sort]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Sort Products By</DialogTitle>
      <List sx={{ pt: 0 }}>
        {SortValue.map((sortValue) => (
          <ListItem
            button
            onClick={() => handleListItemClick(sortValue)}
            key={sortValue}
          >
            {sortValue === sort && (
              <IconButton>
                <Check />
              </IconButton>
            )}
            <ListItemText primary={sortValue}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

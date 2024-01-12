import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

function ExpenseItem({ item, cost, onEdit, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const [editedCost, setEditedCost] = useState(cost);

  const handleEditClick = () => {
    setIsEditing(true);
    onEdit(item, cost);
  };

  const handleSaveClick = () => {
    onSave(editedItem, editedCost);
    setIsEditing(false);
  };
  return (
    <Card
      sx={{
        margin: 2,
        mx: "auto",
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center", flexGrow: 1 }}
          >
            <TextField
              value={editedItem}
              onChange={(e) => setEditedItem(e.target.value)}
              size="small"
            />
            <TextField
              value={editedCost}
              onChange={(e) => setEditedCost(e.target.value)}
              size="small"
            />
          </Box>
        ) : (
          <Box
            sx={{ display: "flex", gap: 2, alignItems: "center", flexGrow: 1 }}
          >
            <Typography variant="h6" noWrap>
              {item}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {cost}원
            </Typography>
          </Box>
        )}

        <Box>
          {isEditing ? (
            <Button
              variant="outlined"
              onClick={handleSaveClick}
              sx={{ marginRight: 1 }}
            >
              저장
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={handleEditClick}
              sx={{ marginRight: 1 }}
            >
              수정
            </Button>
          )}
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(item)}
          >
            삭제
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExpenseItem;

import React from "react";
import { Avatar, Box, Checkbox, IconButton, Typography } from "@mui/material";
import {
  Delete,
  Edit,
  Email,
  Favorite,
  FavoriteBorder,
  Phone,
  Public,
} from "@mui/icons-material";
import { userType } from "../types/user";

type UserCardPropType = {
  user: userType;
  onLike: Function;
  onEdit: Function;
  onDelete: Function;
};

const UserCard = ({ user, onLike, onDelete, onEdit }: UserCardPropType) => {
  return (
    <>
      <Box
        sx={{
          margin: "10px",
          padding: "20px 16px",
          border: "1px solid #d4d4d4",
          borderRadius: "10px",
          width: "20vw",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            position: "relative",
            display: "flex",
            marginBottom: "9px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              position: "relative",
              display: "inline-flex",
              marginBottom: "9px",
            }}
          >
            <Avatar
              alt={user.username}
              src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              sx={{
                width: 56,
                height: 56,
                position: "relative",
                display: "inline-flex",
              }}
            />
          </Box>
          <Box>
            <Box>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color="error" fontSize="small" sx={{border: 'none'}} />}
                checked={user.isLiked || false}
                onChange={(e) => onLike(user.id, e.target.checked)}
              />
              <IconButton onClick={() => onDelete(user.id)}>
                <Delete color="error" fontSize="small" />
              </IconButton>
              <IconButton onClick={() => onEdit(user)}>
                <Edit color="info" fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box marginBottom="8px">
          <Typography>{user.name}</Typography>
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", margin: 0 }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                color: "#9d9d9d",
                margin: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Email fontSize="small" sx={{ mr: 1 }} /> E-mail
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "#363636",
                margin: "0 0 10px",
              }}
            >
              {user.email}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", margin: 0 }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                color: "#9d9d9d",
                margin: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Phone fontSize="small" sx={{ mr: 1 }} /> Phone
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "#363636",
                margin: "0 0 10px",
              }}
            >
              {user.phone}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", margin: 0 }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                color: "#9d9d9d",
                margin: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Public fontSize="small" sx={{ mr: 1 }} /> Website
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                color: "#363636",
                margin: "0 0 10px",
              }}
            >
              {user.website}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserCard;

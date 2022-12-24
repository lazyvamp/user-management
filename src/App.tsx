import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import UserCard from "./components/UserCard";
import { getUserUrl } from "./config/urlConst";
import useFetch from "./hooks/useFetch";
import { userType } from "./types/user";
import store from "./store/Store";
import { dispatcher } from "./helper/storeHelper";
import {
  USER_DELETED,
  USER_EDITED,
  USER_LIKED,
  USER_STORED,
} from "./store/actionTypes";
import EditDialog from "./components/EditDialog";
import Loader from "./components/Loader";

function App() {
  const [userList, setUserList, loading] = useFetch(getUserUrl, USER_STORED);
  const [editableData, setEditableData] = useState<userType | null>(null);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setUserList(store.getState().users);
    });

    return () => {
      unsubscribe();
      setUserList(null);
    };
    // eslint-disable-next-line
  }, []);

  const openEditDialog = (user: userType) => {
    setEditableData(user);
  };

  const handleDelete = (id: number) => {
    dispatcher(USER_DELETED, { id });
  };

  const handleLike = (id: number, isLiked: boolean) => {
    dispatcher(USER_LIKED, { id, isLiked });
  };

  const handleUpdate = (user: userType) => {
    dispatcher(USER_EDITED, user);
    setEditableData(null);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && userList?.length !== 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", padding: "46px" }}>
          {userList.map((user: userType, index: number) => {
            return (
              <UserCard
                key={index}
                user={user}
                onDelete={handleDelete}
                onEdit={openEditDialog}
                onLike={handleLike}
              />
            );
          })}
          <EditDialog
            dataToUpdate={editableData}
            dialogTitle={"Update Details"}
            handleClose={() => setEditableData(null)}
            onEdit={handleUpdate}
          />
        </Box>
      )}
      {!userList?.length && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "46px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh"
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "#363636",
              margin: "0 0 10px",
            }}
          >
            NO DATA
          </Typography>
        </Box>
      )}
    </>
  );
}

export default App;

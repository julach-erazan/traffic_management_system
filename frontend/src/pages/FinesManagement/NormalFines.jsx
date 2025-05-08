import React from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import COLORS from "../../utils/Colors";
import { useNavigate } from "react-router-dom";

const NormalFines = () => {
  const navigate = useNavigate();

  // Sample data - replace with your actual data
  const fines = [
    {
      id: 1,
      offence: "Drive without Helmet",
      nature: "low",
      type: "Normal",
      fineamount: "Rs. 1000",
      category: "Normal Fines",
      status: "Pending",
      date: "2024-03-15",
    },
    {
      id: 2,
      offence: "Speeding",
      nature: "medium",
      type: "Normal",
      fineamount: "Rs. 2000",
      category: "Normal Fines",
      status: "Paid",
      date: "2024-03-14",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "warning";
      case "paid":
        return "success";
      case "overdue":
        return "error";
      default:
        return "default";
    }
  };

  const getNatureColor = (nature) => {
    switch (nature.toLowerCase()) {
      case "low":
        return COLORS.lightBlue;
      case "medium":
        return COLORS.orangeColor;
      case "high":
        return COLORS.redColor;
      default:
        return COLORS.greyColor;
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{ fontSize: "24px", fontWeight: 800, color: COLORS.black }}
        >
          Normal Fines Management
        </Typography>
        <Button
          sx={{
            bgcolor: COLORS.orangeColor,
            color: COLORS.white,
            fontWeight: 700,
            "&:hover": {
              bgcolor: COLORS.lightBlue,
              color: COLORS.black,
            },
          }}
          onClick={() => navigate("/finesdetails")}
        >
          + New Fine
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: COLORS.bgBlue }}>
              <TableCell sx={{ color: "#fff" }}>ID</TableCell>
              <TableCell sx={{ color: "#fff" }}>Offence</TableCell>
              <TableCell sx={{ color: "#fff" }}>Nature</TableCell>
              <TableCell sx={{ color: "#fff" }}>Type</TableCell>
              <TableCell sx={{ color: "#fff" }}>Fine Amount</TableCell>
              <TableCell sx={{ color: "#fff" }}>Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fines.map((fine, index) => (
              <TableRow
                key={fine.id}
                sx={{
                  bgcolor: index % 2 === 0 ? COLORS.white : "#f8f9fa",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                <TableCell sx={{ color: COLORS.black }}>{fine.id}</TableCell>
                <TableCell sx={{ color: COLORS.black }}>
                  {fine.offence}
                </TableCell>
                <TableCell>
                  <Chip
                    label={fine.nature}
                    sx={{
                      bgcolor: getNatureColor(fine.nature),
                      color: COLORS.white,
                      fontWeight: 600,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: COLORS.black }}>{fine.type}</TableCell>
                <TableCell sx={{ color: COLORS.black }}>
                  {fine.fineamount}
                </TableCell>
                <TableCell sx={{ color: COLORS.black }}>{fine.date}</TableCell>
                <TableCell>
                  <Chip
                    label={fine.status}
                    color={getStatusColor(fine.status)}
                    sx={{ fontWeight: 600 }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => navigate(`/editFines/${fine.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NormalFines;

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
import GavelIcon from "@mui/icons-material/Gavel";
import COLORS from "../../utils/Colors";
import { useNavigate } from "react-router-dom";

const CourtFines = () => {
  const navigate = useNavigate();

  // Sample data - replace with your actual data
  const courtFines = [
    {
      id: 1,
      caseNumber: "CT-2024-001",
      offence: "Drunk Driving",
      nature: "high",
      type: "Court",
      fineamount: "Rs. 25000",
      courtDate: "2024-04-15",
      description: "Driving under influence of alcohol",
      status: "Scheduled",
      judge: "Hon. Smith",
    },
    {
      id: 2,
      caseNumber: "CT-2024-002",
      offence: "Reckless Driving",
      nature: "high",
      type: "Court",
      fineamount: "Rs. 15000",
      courtDate: "2024-04-20",
      description: "Endangering public safety",
      status: "Pending",
      judge: "Hon. Johnson",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "scheduled":
        return "primary";
      case "completed":
        return "success";
      case "pending":
        return "warning";
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <GavelIcon sx={{ fontSize: 30, color: COLORS.orangeColor }} />
          <Typography
            sx={{ fontSize: "24px", fontWeight: 800, color: COLORS.black }}
          >
            Court Fines Management
          </Typography>
        </Box>
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
          + New Court Case
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
              <TableCell sx={{ color: "#fff" }}>Case Number</TableCell>
              <TableCell sx={{ color: "#fff" }}>Offence</TableCell>
              <TableCell sx={{ color: "#fff" }}>Nature</TableCell>
              <TableCell sx={{ color: "#fff" }}>Fine Amount</TableCell>
              <TableCell sx={{ color: "#fff" }}>Court Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Judge</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courtFines.map((fine, index) => (
              <TableRow
                key={fine.id}
                sx={{
                  bgcolor: index % 2 === 0 ? COLORS.white : "#f8f9fa",
                  "&:hover": { bgcolor: "#f5f5f5" },
                }}
              >
                <TableCell sx={{ color: COLORS.black }}>
                  {fine.caseNumber}
                </TableCell>
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
                <TableCell sx={{ color: COLORS.black }}>
                  {fine.fineamount}
                </TableCell>
                <TableCell sx={{ color: COLORS.black }}>
                  {fine.courtDate}
                </TableCell>
                <TableCell sx={{ color: COLORS.black }}>{fine.judge}</TableCell>
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

export default CourtFines;

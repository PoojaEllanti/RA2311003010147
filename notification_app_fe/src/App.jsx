import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Chip,
  Divider
} from "@mui/material";

export default function App() {
  const data = [
    {
      ID: "1",
      Type: "Placement",
      Message: "Meta Platforms Inc. hiring",
      Timestamp: "2026-05-01 17:58:21"
    },
    {
      ID: "2",
      Type: "Placement",
      Message: "Visa Inc. hiring",
      Timestamp: "2026-05-01 05:58:15"
    },
    {
      ID: "3",
      Type: "Result",
      Message: "Mid-sem results published",
      Timestamp: "2026-05-02 00:58:09"
    },
    {
      ID: "4",
      Type: "Event",
      Message: "Cult-fest registrations open",
      Timestamp: "2026-05-01 11:28:03"
    },
    {
      ID: "5",
      Type: "Event",
      Message: "Tech-fest starts tomorrow",
      Timestamp: "2026-05-01 08:27:39"
    },
    {
      ID: "6",
      Type: "Result",
      Message: "Project review marks updated",
      Timestamp: "2026-05-01 14:20:00"
    }
  ];

  const [filter, setFilter] = useState("");

  const filtered =
    filter === ""
      ? data
      : data.filter((item) => item.Type === filter);

  const priority = [...data]
    .sort((a, b) => {
      const rank = {
        Placement: 3,
        Result: 2,
        Event: 1
      };

      if (rank[b.Type] !== rank[a.Type]) {
        return rank[b.Type] - rank[a.Type];
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 5);

  const getChipColor = (type) => {
    if (type === "Placement") return "success";
    if (type === "Result") return "primary";
    return "warning";
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Campus Notifications Dashboard
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Real-time updates for Events, Results and Placements
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Total Notifications: {filtered.length}
          </Typography>
        </CardContent>
      </Card>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Filter Type</InputLabel>

        <Select
          value={filter}
          label="Filter Type"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Placement">Placement</MenuItem>
          <MenuItem value="Result">Result</MenuItem>
          <MenuItem value="Event">Event</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Priority Inbox
              </Typography>

              {priority.map((item, index) => (
                <Box key={item.ID} sx={{ py: 1 }}>
                  <Chip
                    label={item.Type}
                    color={getChipColor(item.Type)}
                    size="small"
                    sx={{ mr: 1 }}
                  />

                  {index < 3 && (
                    <Chip
                      label="NEW"
                      color="error"
                      size="small"
                    />
                  )}

                  <Typography
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                  >
                    {item.Message}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.Timestamp}
                  </Typography>

                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                All Notifications
              </Typography>

              {filtered.map((item, index) => (
                <Box key={item.ID} sx={{ py: 1 }}>
                  <Chip
                    label={item.Type}
                    color={getChipColor(item.Type)}
                    size="small"
                    sx={{ mr: 1 }}
                  />

                  {index < 3 && (
                    <Chip
                      label="NEW"
                      color="error"
                      size="small"
                    />
                  )}

                  <Typography
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                  >
                    {item.Message}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.Timestamp}
                  </Typography>

                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
/**
 * KTM Komuter Schedule Data
 * Sumber: https://www.ktmb.com.my/TrainTime.html
 * Data ini bersifat representatif. Harap verifikasi dengan jadwal resmi KTMB.
 * Last updated: April 2026 timetable
 */

const KTM_LINES = [
  // ─────────────────────────────────────────────────────────────────────────
  // LINE 1: Batu Caves ↔ Pulau Sebang / Tampin
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "line1",
    name: "Batu Caves – Pulau Sebang/Tampin",
    shortName: "Line 1",
    color: "#009A44",
    terminalA: "Batu Caves",
    terminalB: "Pulau Sebang/Tampin",
    stations: [
      { name: "Batu Caves",          offset: 0   },
      { name: "Sentul Timur",        offset: 5   },
      { name: "Sentul",              offset: 8   },
      { name: "Batu Kentonmen",      offset: 11  },
      { name: "Jalan Ipoh",          offset: 14  },
      { name: "Putra",               offset: 17  },
      { name: "Bank Negara",         offset: 19  },
      { name: "Kuala Lumpur",        offset: 22  },
      { name: "KL Sentral",          offset: 26  },
      { name: "Mid Valley",          offset: 30  },
      { name: "Seputeh",             offset: 33  },
      { name: "Salak Selatan",       offset: 36  },
      { name: "Serdang",             offset: 42  },
      { name: "Kajang",              offset: 48  },
      { name: "Bangi",               offset: 54  },
      { name: "Batang Benar",        offset: 62  },
      { name: "Nilai",               offset: 68  },
      { name: "Tiroi",               offset: 74  },
      { name: "Labu",                offset: 79  },
      { name: "Sungai Gadut",        offset: 84  },
      { name: "Senawang",            offset: 89  },
      { name: "Seremban",            offset: 95  },
      { name: "Rembau",              offset: 110 },
      { name: "Pulau Sebang/Tampin", offset: 122 },
    ],
    weekday: {
      // Keberangkatan dari Batu Caves (Southbound)
      southbound: [
        "05:30","05:55","06:15","06:35","06:55","07:15","07:35","07:55",
        "08:20","08:50","09:20","09:55","10:30","11:00","11:30","12:00",
        "12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00",
        "16:25","16:50","17:15","17:40","18:05","18:35","19:05","19:40",
        "20:15","20:50","21:25","22:00","22:40","23:15"
      ],
      // Keberangkatan dari Pulau Sebang/Tampin (Northbound)
      northbound: [
        "04:45","05:20","05:55","06:25","06:55","07:25","07:55","08:25",
        "08:55","09:30","10:05","10:40","11:10","11:40","12:10","12:40",
        "13:10","13:40","14:10","14:40","15:10","15:40","16:10","16:40",
        "17:10","17:40","18:10","18:45","19:20","19:55","20:30","21:10",
        "21:50","22:30"
      ]
    },
    weekend: {
      // Keberangkatan dari Batu Caves (Southbound)
      southbound: [
        "06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30",
        "10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30",
        "18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30",
        "22:00","22:30","23:00"
      ],
      // Keberangkatan dari Pulau Sebang/Tampin (Northbound)
      northbound: [
        "05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00",
        "09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00",
        "13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00",
        "17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00",
        "21:30","22:00"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LINE 2: Tanjung Malim ↔ Pelabuhan Klang
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "line2",
    name: "Tanjung Malim – Pelabuhan Klang",
    shortName: "Line 2",
    color: "#0072CE",
    terminalA: "Tanjung Malim",
    terminalB: "Pelabuhan Klang",
    stations: [
      { name: "Tanjung Malim",      offset: 0   },
      { name: "Slim River",         offset: 12  },
      { name: "Sungkai",            offset: 21  },
      { name: "Behrang",            offset: 30  },
      { name: "Kerling",            offset: 42  },
      { name: "Kuala Kubu Bharu",   offset: 49  },
      { name: "Batang Kali",        offset: 56  },
      { name: "Rasa",               offset: 62  },
      { name: "Serendah",           offset: 68  },
      { name: "Rawang",             offset: 74  },
      { name: "Kepong Sentral",     offset: 86  },
      { name: "Kepong",             offset: 89  },
      { name: "Segambut",           offset: 92  },
      { name: "Kuala Lumpur",       offset: 97  },
      { name: "KL Sentral",         offset: 101 },
      { name: "Angkasapuri",        offset: 105 },
      { name: "Pantai Dalam",       offset: 108 },
      { name: "Jalan Templer",      offset: 111 },
      { name: "Petaling",           offset: 114 },
      { name: "Lembah Subang",      offset: 118 },
      { name: "Subang Jaya",        offset: 122 },
      { name: "Batu Tiga",          offset: 126 },
      { name: "Shah Alam",          offset: 130 },
      { name: "Padang Jawa",        offset: 133 },
      { name: "Bukit Badak",        offset: 136 },
      { name: "Klang",              offset: 141 },
      { name: "Teluk Pulai",        offset: 145 },
      { name: "Teluk Gadong",       offset: 149 },
      { name: "Kampung Raja Uda",   offset: 152 },
      { name: "Pelabuhan Klang",    offset: 157 },
    ],
    weekday: {
      // Keberangkatan dari Tanjung Malim (→ Pelabuhan Klang)
      southbound: [
        "04:30","05:15","06:00","06:45","07:30","08:15","09:00","09:45",
        "10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45",
        "16:30","17:15","18:00","18:45","19:30","20:15","21:00","21:45"
      ],
      // Keberangkatan dari Pelabuhan Klang (→ Tanjung Malim)
      northbound: [
        "04:00","04:45","05:30","06:15","07:00","07:45","08:30","09:15",
        "10:00","10:45","11:30","12:15","13:00","13:45","14:30","15:15",
        "16:00","16:45","17:30","18:15","19:00","19:45","20:30","21:15"
      ]
    },
    weekend: {
      southbound: [
        "05:00","05:45","06:30","07:15","08:00","08:45","09:30","10:15",
        "11:00","11:45","12:30","13:15","14:00","14:45","15:30","16:15",
        "17:00","17:45","18:30","19:15","20:00","20:45","21:30","22:15"
      ],
      northbound: [
        "04:30","05:15","06:00","06:45","07:30","08:15","09:00","09:45",
        "10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45",
        "16:30","17:15","18:00","18:45","19:30","20:15","21:00","21:45"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // KOMUTER UTARA: Ipoh ↔ Butterworth
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "utara_a",
    name: "Komuter Utara – Ipoh ↔ Butterworth",
    shortName: "Utara A",
    color: "#E63946",
    terminalA: "Ipoh",
    terminalB: "Butterworth",
    stations: [
      { name: "Ipoh",              offset: 0   },
      { name: "Chemor",            offset: 12  },
      { name: "Sungai Siput",      offset: 23  },
      { name: "Tanjung Rambutan",  offset: 30  },
      { name: "Kuala Kangsar",     offset: 42  },
      { name: "Padang Rengas",     offset: 55  },
      { name: "Taiping",           offset: 75  },
      { name: "Kamunting",         offset: 81  },
      { name: "Bagan Serai",       offset: 97  },
      { name: "Parit Buntar",      offset: 107 },
      { name: "Bukit Mertajam",    offset: 134 },
      { name: "Butterworth",       offset: 144 },
    ],
    weekday: {
      southbound: [
        "06:00","07:00","08:00","09:20","10:40","12:00","13:20","14:40",
        "16:00","17:20","18:40","20:00","21:20"
      ],
      northbound: [
        "05:00","06:20","07:40","09:00","10:20","11:40","13:00","14:20",
        "15:40","17:00","18:20","19:40","21:00"
      ]
    },
    weekend: {
      southbound: [
        "06:30","08:00","09:30","11:00","12:30","14:00","15:30","17:00",
        "18:30","20:00","21:30"
      ],
      northbound: [
        "05:30","07:00","08:30","10:00","11:30","13:00","14:30","16:00",
        "17:30","19:00","20:30"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // KOMUTER UTARA: Butterworth ↔ Padang Besar
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "utara_b",
    name: "Komuter Utara – Butterworth ↔ Padang Besar",
    shortName: "Utara B",
    color: "#FF6B35",
    terminalA: "Butterworth",
    terminalB: "Padang Besar",
    stations: [
      { name: "Butterworth",     offset: 0  },
      { name: "Bukit Mertajam", offset: 10 },
      { name: "Sungai Bakap",   offset: 22 },
      { name: "Bukit Tengah",   offset: 28 },
      { name: "Simpang Ampat",  offset: 32 },
      { name: "Nibong Tebal",   offset: 40 },
      { name: "Bukit Ketri",    offset: 52 },
      { name: "Arau",           offset: 60 },
      { name: "Padang Besar",   offset: 73 },
    ],
    weekday: {
      southbound: [
        "06:30","08:00","09:30","11:00","12:30","14:00","15:30","17:00",
        "18:30","20:00","21:30"
      ],
      northbound: [
        "05:45","07:15","08:45","10:15","11:45","13:15","14:45","16:15",
        "17:45","19:15","20:45"
      ]
    },
    weekend: {
      southbound: [
        "07:00","09:00","11:00","13:00","15:00","17:00","19:00","21:00"
      ],
      northbound: [
        "06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00"
      ]
    }
  }
];

// ─── Utility: parse "HH:MM" → total minutes since midnight ─────────────────
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// ─── Utility: total minutes → "HH:MM" string ────────────────────────────────
function minutesToTime(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// ─── Build a flat list of all unique station names (for search autocomplete) ─
function getAllStations() {
  const set = new Set();
  KTM_LINES.forEach(line => line.stations.forEach(s => set.add(s.name)));
  return [...set].sort();
}

/**
 * Search trains from `from` to `to` on `dayType` ("weekday" | "weekend").
 * Returns array of result objects: { line, trainNumber, departure, arrival, duration, direction }
 */
function searchTrains(from, to, dayType) {
  const results = [];

  KTM_LINES.forEach(line => {
    const stations = line.stations;
    const fromIdx  = stations.findIndex(s => s.name === from);
    const toIdx    = stations.findIndex(s => s.name === to);

    if (fromIdx === -1 || toIdx === -1) return; // stations not on this line

    const schedule     = line[dayType] || line.weekday;
    const isSouthbound = toIdx > fromIdx; // going toward terminalB
    const direction    = isSouthbound ? "southbound" : "northbound";
    const departureTimes = schedule[direction];

    // offset of from-station relative to first station in this direction
    const firstStation = isSouthbound ? stations[0]            : stations[stations.length - 1];
    const fromOffset   = isSouthbound ? stations[fromIdx].offset : (stations[stations.length - 1].offset - stations[fromIdx].offset);
    const toOffset     = isSouthbound ? stations[toIdx].offset   : (stations[stations.length - 1].offset - stations[toIdx].offset);

    departureTimes.forEach((terminalDep, idx) => {
      const terminalMins = timeToMinutes(terminalDep);
      const depMins      = terminalMins + fromOffset;
      const arrMins      = terminalMins + toOffset;
      const durMins      = toOffset - fromOffset;

      results.push({
        lineId:      line.id,
        lineName:    line.name,
        lineShort:   line.shortName,
        lineColor:   line.color,
        trainNo:     `${line.shortName.replace(/\s/g, "")}-${String(idx + 1).padStart(2, "0")}`,
        direction:   isSouthbound ? `→ ${line.terminalB}` : `→ ${line.terminalA}`,
        departure:   minutesToTime(depMins),
        arrival:     minutesToTime(arrMins),
        depMins,
        durMins,
        from,
        to,
      });
    });
  });

  return results.sort((a, b) => a.depMins - b.depMins);
}

/**
 * Get the full timetable for a single line in one direction.
 * Returns: { stations[], trains[{ trainNo, times[] }] }
 */
function getFullTimetable(lineId, direction, dayType) {
  const line = KTM_LINES.find(l => l.id === lineId);
  if (!line) return null;

  const schedule       = line[dayType] || line.weekday;
  const departureTimes = schedule[direction];
  const stations       = direction === "southbound"
    ? line.stations
    : [...line.stations].reverse();

  const trains = departureTimes.map((terminalDep, idx) => {
    const terminalMins = timeToMinutes(terminalDep);
    const times = stations.map((s, si) => {
      const off = direction === "southbound"
        ? s.offset
        : (line.stations[line.stations.length - 1].offset - line.stations[line.stations.length - 1 - si].offset);
      return minutesToTime(terminalMins + off);
    });
    return {
      trainNo: `${line.shortName.replace(/\s/g, "")}-${String(idx + 1).padStart(2, "0")}`,
      times
    };
  });

  return { stations: stations.map(s => s.name), trains };
}

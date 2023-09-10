const schedule = {
    "Senin": [
      { mata_pelajaran: "Upacara", waktu_pengajaran: "06:30 - 07:30" },
        { mata_pelajaran: "Matematika", waktu_pengajaran: "07:30 - 09:45" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:45 - 10:10" },
        { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "10:10 - 11:30" },
        { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:30 - 12:30" },
        { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "12:30 - 13:05" },
      { mata_pelajaran: "Bahasa Indonesia", waktu_pengajaran: "13:05 - 14:45" }
    ],
  
    "Selasa": [
        { mata_pelajaran: "Tadarus & Shalat Dhuha", waktu_pengajaran: "06:30 - 07:15" },
        { mata_pelajaran: "Basis Data", waktu_pengajaran: "07:15 - 09:15" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:15 - 09:40" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:40 - 11:35" },
        { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "12:30 - 13:40" },
        { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:40 - 14:45" }
    ],
  
    "Rabu": [
        { mata_pelajaran: "Tadarus & Literasi", waktu_pengajaran: "06:30 - 07:00" },
        { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "07:00 - 09:15" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:15 - 09:40" },
        { mata_pelajaran: "Al-Qur'an", waktu_pengajaran: "09:40 - 11:35" },
        { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
        { mata_pelajaran: "Matematika", waktu_pengajaran: "12:30 - 13:05" },
        { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "13:05 - 14:45" }
    ],
  
    "Kamis": [
        { mata_pelajaran: "Tadarus & Literasi", waktu_pengajaran: "06:30 - 07:00" },
        { mata_pelajaran: "PBO", waktu_pengajaran: "07:00 - 09:15" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:15 - 09:40" },
        { mata_pelajaran: "PBO", waktu_pengajaran: "09:40 - 11:35" },
        { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "12:30 - 14:45" }
    ],
  
    "Jumat": [
        { mata_pelajaran: "Tadarus & Literasi / Shalat Dhuha", waktu_pengajaran: "06:30 - 07:00" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "07:00 - 09:30" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:30 - 09:50" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:50 - 10:20" },
      { mata_pelajaran: "PKN", waktu_pengajaran: "10:20 - 11:35" },
        { mata_pelajaran: "Istirahat & Shalat Jum'at", waktu_pengajaran: "11:35 - 12:45" },
        { mata_pelajaran: "Basis Data", waktu_pengajaran: "12:45 - 14:45" }
    ],
  
   "Sabtu": [
        { mata_pelajaran: "Turu Part 1", waktu_pengajaran: "00:00 - 06:00" },
        { mata_pelajaran: "Turu Part 2", waktu_pengajaran: "06:00 - 12:00" },
        { mata_pelajaran: "Turu Part 3", waktu_pengajaran: "12:00 - 18:00" },
        { mata_pelajaran: "Turu Part 4", waktu_pengajaran: "18:00 - 24:00" }
    ],
  
    "Minggu": [
        { mata_pelajaran: "Turu Part 1", waktu_pengajaran: "00:00 - 06:00" },
        { mata_pelajaran: "Turu Part 2", waktu_pengajaran: "06:00 - 12:00" },
        { mata_pelajaran: "Turu Part 3", waktu_pengajaran: "12:00 - 18:00" },
        { mata_pelajaran: "Turu Part 4", waktu_pengajaran: "18:00 - 24:00" }
    ]
  };
  
  document.addEventListener("DOMContentLoaded", function () {
      showTomorrowSchedule();
  });
  
  function showTomorrowSchedule() {
      const scheduleContainer = document.getElementById("schedule-container");
      const now = new Date();
      now.setDate(now.getDate() + 1);
      const tomorrow = getDayOfWeek(now.getDay()); // Dapatkan hari besok
  
      scheduleContainer.innerHTML = ""; // Bersihkan konten sebelumnya
  
      const scheduleTitle = document.createElement("h2");
      scheduleTitle.textContent = `Jadwal Pelajaran Hari ${tomorrow}`;
      scheduleContainer.appendChild(scheduleTitle);
  
      // Tampilkan jadwal hanya untuk hari besok
      if (schedule.hasOwnProperty(tomorrow)) {
          const scheduleList = schedule[tomorrow];
          for (let i = 0; i < scheduleList.length; i++) {
              const scheduleCard = createScheduleCard(scheduleList[i]);
              scheduleContainer.appendChild(scheduleCard);
          }
          updateScheduleVisibility(scheduleList);
      } else {
          const message = document.createElement("p");
          message.textContent = "Tidak ada jadwal untuk besok.";
          scheduleContainer.appendChild(message);
      }
  }
  
  function getDayOfWeek(dayNumber) {
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      return days[dayNumber];
  }
  
  function createScheduleCard(scheduleData) {
      const card = document.createElement("div");
      card.classList.add("schedule-card");
  
      const subjectElement = document.createElement("p");
      subjectElement.textContent = scheduleData.mata_pelajaran;
  
      const timeElement = document.createElement("p");
      timeElement.textContent = scheduleData.waktu_pengajaran;
  
      card.appendChild(subjectElement);
      card.appendChild(timeElement);
  
      return card;
  }
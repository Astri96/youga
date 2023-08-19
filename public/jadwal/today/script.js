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
    const scheduleContainer = document.getElementById("schedule-container");
    const today = getToday(); // Dapatkan hari saat ini

    const scheduleTitle = document.createElement("h2");
    scheduleTitle.textContent = `Jadwal Pelajaran Hari ${today}`;
    scheduleContainer.appendChild(scheduleTitle);

    // Tampilkan jadwal hanya untuk hari saat ini
    if (schedule.hasOwnProperty(today)) {
        const scheduleList = schedule[today];
        for (let i = 0; i < scheduleList.length; i++) {
            const scheduleCard = createScheduleCard(scheduleList[i]);
            scheduleContainer.appendChild(scheduleCard);
        }
        updateScheduleVisibility(scheduleList);
    } else {
        const message = document.createElement("p");
        message.textContent = "Tidak ada jadwal untuk hari ini.";
        scheduleContainer.appendChild(message);
    }
});

function getToday() {
    const now = new Date();
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return days[now.getDay()];
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

function updateScheduleVisibility(scheduleList) {
    const currentTime = new Date();
    for (let i = 0; i < scheduleList.length; i++) {
        const [startHour, startMinute] = scheduleList[i].waktu_pengajaran.split(" ")[0].split(":");
        const startTime = new Date(currentTime);
        startTime.setHours(Number(startHour));
        startTime.setMinutes(Number(startMinute));

        const [endHour, endMinute] = scheduleList[i].waktu_pengajaran.split(" - ")[1].split(":");
        const endTime = new Date(currentTime);
        endTime.setHours(Number(endHour));
        endTime.setMinutes(Number(endMinute));

        const scheduleCard = document.querySelector(".schedule-card:nth-child(" + (i + 2) + ")");
        
        // Periksa apakah jadwal belum terlewat dan sedang berlangsung
        if (currentTime >= startTime && currentTime <= endTime) {
            scheduleCard.style.display = "block";
        } else {
            // Periksa apakah jadwal sudah terlewat, jika iya, sembunyikan kartu jadwal
            if (currentTime > endTime) {
                scheduleCard.style.display = "none";
            } else {
                // Jadwal yang belum terlewat tetapi belum berlangsung juga akan ditampilkan
                scheduleCard.style.display = "block";
            }
        }
    }
}

function goToTomorrowSchedule() {
    window.location.href = "/tomorrow/index.html"; // Arahkan kembali ke halaman index.html
}
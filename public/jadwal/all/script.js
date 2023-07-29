const schedule = [
    {
        day: "Senin",
            subjects: [
      { mata_pelajaran: "Upacara", waktu_pengajaran: "06:30 - 07:30" },
      { mata_pelajaran: "Matematika", waktu_pengajaran: "07:30 - 09:45" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:45 - 10:00" },
      { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "10:00 - 11:30" },
      { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:30 - 12:30" },
      { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "12:30 - 13:05" },
      { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:05 - 14:45" }
        ]
    },
    {
        day: "Selasa",
            subjects: [
            { mata_pelajaran: "Tadarus & Shalat Dhuha", waktu_pengajaran: "06:30 - 07:15" },
      { mata_pelajaran: "Basis Data", waktu_pengajaran: "07:15 - 09:30" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:30 - 09:45" },
      { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:45 - 11:35" },
      { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
      { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "12:30 - 13:40" },
      { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:40 - 14:45" }
        ]
    },
    {
        day: "Rabu",
            subjects: [
            { mata_pelajaran: "Tadarus & Literasi", waktu_pengajaran: "06:30 - 07:00" },
      { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "07:00 - 09:15" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:15 - 09:30" },
      { mata_pelajaran: "Al-Qur'an", waktu_pengajaran: "09:30 - 11:35" },
      { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
      { mata_pelajaran: "PKN", waktu_pengajaran: "12:30 - 13:40" },
      { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "13:40 - 14:45" }
        ]
    },
    {
        day: "Kamis",
            subjects: [
            { mata_pelajaran: "Tadarus & Literasi", waktu_pengajaran: "06:30 - 07:00" },
      { mata_pelajaran: "PBO", waktu_pengajaran: "07:00 - 09:15" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:15 - 09:30" },
      { mata_pelajaran: "PBO", waktu_pengajaran: "09:30 - 11:35" },
      { mata_pelajaran: "Istirahat & Shalat Dzuhur", waktu_pengajaran: "11:35 - 12:30" },
      { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "12:30 - 14:45" }
        ]
    },
    {
        day: "Jumat",
            subjects: [
            { mata_pelajaran: "Tadarus & Literasi / Shalat Dhuha", waktu_pengajaran: "06:30 - 07:00" },
      { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "07:00 - 09:30" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:30 - 09:45" },
      { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "09:45 - 11:35" },
      { mata_pelajaran: "Istirahat & Shalat Jum'at", waktu_pengajaran: "11:35 - 12:45" },
      { mata_pelajaran: "Basis Data", waktu_pengajaran: "12:45 - 14:45" }
        ]
    },
    {
        day: "Sabtu",
            subjects: [
            { mata_pelajaran: "Turu Part 1", waktu_pengajaran: "00:00 - 06:00" },
      { mata_pelajaran: "Turu Part 2", waktu_pengajaran: "06:00 - 12:00" },
      { mata_pelajaran: "Turu Part 3", waktu_pengajaran: "12:00 - 18:00" },
      { mata_pelajaran: "Turu Part 4", waktu_pengajaran: "18:00 - 24:00" }
        ]
    },
    {
        day: "Minggu",
            subjects: [
            { mata_pelajaran: "Turu Part 1", waktu_pengajaran: "00:00 - 06:00" },
      { mata_pelajaran: "Turu Part 2", waktu_pengajaran: "06:00 - 12:00" },
      { mata_pelajaran: "Turu Part 3", waktu_pengajaran: "12:00 - 18:00" },
      { mata_pelajaran: "Turu Part 4", waktu_pengajaran: "18:00 - 24:00" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", function () {
    showSchedule();
});

function showSchedule() {
    const scheduleContainer = document.getElementById("schedule-container");

    // Loop untuk setiap hari dalam jadwal
    schedule.forEach((daySchedule) => {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");

        const dayTitle = document.createElement("h2");
        dayTitle.textContent = daySchedule.day;
        dayContainer.appendChild(dayTitle);

        // Tambahkan jadwal mata pelajaran untuk hari tersebut
        daySchedule.subjects.forEach((scheduleData) => {
            const scheduleCard = createScheduleCard(scheduleData);
            dayContainer.appendChild(scheduleCard);
        });

        scheduleContainer.appendChild(dayContainer);
    });
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
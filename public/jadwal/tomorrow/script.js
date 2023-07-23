const schedule = {
    "Senin": [
        { mata_pelajaran: "Matematika", waktu_pengajaran: "07:30 - 09:45" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:45 - 10:00" },
        { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "10:00 - 11:30" },
      { mata_pelajaran: "Istirahat", waktu_pengajaran: "11:30 - 12:30" },
      { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "12:30 - 13:05" },
        { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:05 - 14:45" }
    ],
    "Selasa": [
        { mata_pelajaran: "Basis Data", waktu_pengajaran: "07:15 - 09:30" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:30 - 09:45" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:45 - 11:35" },
        { mata_pelajaran: "Istirahat", waktu_pengajaran: "11:35 - 12:30" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "11:30 - 13:40" },
        { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:40 - 14:45" }
    ],
    "Rabu": [
        { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "08:00 - 09:30" },
        { mata_pelajaran: "Al-Qur'an", waktu_pengajaran: "09:45 - 11:15" },
        { mata_pelajaran: "Matematika", waktu_pengajaran: "13:00 - 14:30" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:45 - 11:15" },
        { mata_pelajaran: "PKN", waktu_pengajaran: "13:00 - 14:30" }
    ],
    "Kamis": [
        { mata_pelajaran: "PBO", waktu_pengajaran: "08:00 - 09:30" },
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "08:00 - 09:30" }
    ],
    "Jumat": [
        { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "08:00 - 09:30" },
        { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "08:00 - 09:30" },
        { mata_pelajaran: "Basis Data", waktu_pengajaran: "09:45 - 11:15" }
    ],
    "Sabtu": [
        { mata_pelajaran: "Ngorok", waktu_pengajaran: "09:00 - 13:00" },
        { mata_pelajaran: "Ngorok Part 2", waktu_pengajaran: "13:00 - 23:50" }
    ],
    "Minggu": [
        { mata_pelajaran: "Ngorok", waktu_pengajaran: "09:00 - 13:00" },
        { mata_pelajaran: "Ngorok Part 2", waktu_pengajaran: "13:00 - 24:00" }
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

function goToTodaySchedule() {
    window.location.href = "today/index.html"; // Arahkan kembali ke halaman index.html
}
const schedule = [
    {
        day: "Senin",
            subjects: [
            { mata_pelajaran: "Matematika", waktu_pengajaran: "07:30 - 09:45" },
            { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:45 - 10:00" },
            { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "10:00 - 11:30" },
            { mata_pelajaran: "Istirahat", waktu_pengajaran: "11:30 - 12:30" },
            { mata_pelajaran: "Bahasa Inggris", waktu_pengajaran: "12:30 - 13:05" },
            { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:05 - 14:45" }
        ]
    },
    {
        day: "Selasa",
            subjects: [
            { mata_pelajaran: "Basis Data", waktu_pengajaran: "07:15 - 09:30" },
            { mata_pelajaran: "Istirahat", waktu_pengajaran: "09:30 - 09:45" },
            { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:45 - 11:35" },
            { mata_pelajaran: "Istirahat", waktu_pengajaran: "11:35 - 12:30" },
            { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "11:30 - 13:40" },
            { mata_pelajaran: "Bahasa Jepang", waktu_pengajaran: "13:40 - 14:45" }
        ]
    },
    {
        day: "Rabu",
            subjects: [
            { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "08:00 - 09:30" },
            { mata_pelajaran: "Al-Qur'an", waktu_pengajaran: "09:45 - 11:15" },
            { mata_pelajaran: "Matematika", waktu_pengajaran: "13:00 - 14:30" },
            { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "09:45 - 11:15" },
            { mata_pelajaran: "PKN", waktu_pengajaran: "13:00 - 14:30" }
        ]
    },
    {
        day: "Kamis",
            subjects: [
            { mata_pelajaran: "PBO", waktu_pengajaran: "08:00 - 09:30" },
            { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "08:00 - 09:30" }
        ]
    },
    {
        day: "Jumat",
            subjects: [
            { mata_pelajaran: "Zia Mustofa", waktu_pengajaran: "08:00 - 09:30" },
            { mata_pelajaran: "Kewirausahaan", waktu_pengajaran: "08:00 - 09:30" },
            { mata_pelajaran: "Basis Data", waktu_pengajaran: "09:45 - 11:15" }
        ]
    },
    {
        day: "Sabtu",
            subjects: [
            { mata_pelajaran: "Ngorok", waktu_pengajaran: "09:00 - 13:00" },
            { mata_pelajaran: "Ngorok Part 2", waktu_pengajaran: "13:00 - 23:50" }
        ]
    },
    {
        day: "Minggu",
            subjects: [
            { mata_pelajaran: "Ngorok", waktu_pengajaran: "09:00 - 13:00" },
            { mata_pelajaran: "Ngorok Part 2", waktu_pengajaran: "13:00 - 24:00" }
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
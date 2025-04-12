<template>
  <div class="max-w-5xl mx-auto py-16 px-6 pt-28 space-y-4">
    <div class="grid g-custom gap-4">
      <div>
        <select class="w-full border-2 p-1">
          <option value="" disabled selected>Select Division</option>
          <option v-for="division in []" :key="division" :value="division">
            {{ division }}
          </option>
        </select>
      </div>
      <div>
        <select class="w-full border-2 p-1">
          <option value="" disabled selected>Select District</option>
          <option v-for="district in []" :key="district" :value="district">
            {{ district }}
          </option>
        </select>
      </div>
      <div>
        <select class="w-full border-2 p-1">
          <option value="" disabled selected>Select Thana</option>
          <option v-for="thana in []" :key="thana" :value="thana">
            {{ thana }}
          </option>
        </select>
      </div>
      <div>
        <input
          class="w-full border-2 p-1"
          type="date"
          placeholder="Date"
          name=""
          id=""
        />
      </div>
    </div>

    <div class="grid g-custom gap-4">
      <div class="flex gap-2 item-center">
        <input type="checkbox" name="" id="" />
        <label for="">Investor</label>
      </div>

      <div class="flex gap-2 item-center">
        <input type="checkbox" name="" id="" />
        <label for="">Investment Seeker</label>
      </div>

      <div class="flex gap-2 item-center">
        <input type="checkbox" name="" id="" />
        <label for="">Agent</label>
      </div>

      <div class="flex gap-2 item-center">
        <input type="checkbox" name="" id="" />
        <label for="">Admin</label>
      </div>
    </div>

    <div class="flex border-b-2">
      <div class="flex-1">
        <button class="px-6 py-2 border-b-2">
          All <span class="inline-block bg-custom text-[14px]">6</span>
        </button>
        <button class="px-6 py-2 border-b-2">
          Accepted <span class="inline-block bg-custom text-[14px]">6</span>
        </button>
        <button class="px-6 py-2 border-b-2">
          Rejected <span class="inline-block bg-custom text-[14px]">6</span>
        </button>
        <button class="px-6 py-2 border-b-2">
          Pending <span class="inline-block bg-custom text-[14px]">6</span>
        </button>
      </div>

      <div class="sort">
        <p>Sort By:</p>
        <div>
          <select class="w-full border-2 p-1">
            <option value="" disabled selected>Select Division</option>
            <option v-for="division in []" :key="division" :value="division">
              {{ division }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="flex-1">
        <button
          class="border-2 px-6 py-1 text-[14px] font-extrabold rounded-3xl"
        >
          <span> Accept Selected </span>
        </button>
        <button
          class="border-2 px-6 py-1 text-[14px] font-extrabold rounded-3xl"
        >
          <span> Reject Selected </span>
        </button>
        <button
          class="border-2 px-6 py-1 text-[14px] font-extrabold rounded-3xl"
        >
          <span> Delete Selected </span>
        </button>
      </div>

      <div class="flex gap-2">
        <input type="text" class="w-[100px] border-2 p-1 rounded" />
        <button class="py-1 px-3 bg-blue-600 rounded">Search</button>
      </div>
    </div>

    <div class="p-4 bg-white rounded-lg shadow">
      <table class="w-full text-sm text-left text-gray-700 border-collapse">
        <thead class="text-xs uppercase bg-gray-100">
          <tr>
            <th class="px-2 flex item-center gap-1 py-3">
              <input type="checkbox" />
              All
            </th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">User ID</th>
            <th class="px-4 py-3">User Type</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Application Date</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Reviewed by</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-4 py-3">
              <input type="checkbox" />
            </td>
            <td class="px-4 py-3">{{ user.name }}</td>
            <td class="px-4 py-3">{{ user.userId || "........" }}</td>
            <td class="px-4 py-3">{{ user.userType }}</td>
            <td class="px-4 py-3">{{ user.email }}</td>
            <td class="px-4 py-3">{{ user.applicationDate }}</td>
            <td class="px-4 py-3">
              <span
                :class="statusClass(user.status)"
                class="px-2 py-1 rounded-full text-xs font-bold"
              >
                {{ user.status }}
              </span>
            </td>
            <td class="px-4 py-3">{{ user.reviewedBy || "........" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const users = [
  {
    name: "Emma Carter",
    userId: "",
    userType: "Investor",
    email: "xyz@gmail.com",
    applicationDate: "02/01/2025",
    status: "Pending",
    reviewedBy: "",
  },
  {
    name: "Liam Johnson",
    userId: "ICB00015",
    userType: "Investment seeker",
    email: "xyz@gmail.com",
    applicationDate: "04/01/2025",
    status: "Accepted",
    reviewedBy: "Admin01",
  },
  {
    name: "Sophia Martinez",
    userId: "ICB00016",
    userType: "Agent",
    email: "xyz@gmail.com",
    applicationDate: "02/02/2025",
    status: "Accepted",
    reviewedBy: "Admin01",
  },
  {
    name: "Noah Smith",
    userId: "",
    userType: "Investor",
    email: "xyz@gmail.com",
    applicationDate: "22/02/2025",
    status: "Pending",
    reviewedBy: "",
  },
  {
    name: "Olivia Brown",
    userId: "ICB00017",
    userType: "Investment seeker",
    email: "xyz@gmail.com",
    applicationDate: "22/02/2025",
    status: "Accepted",
    reviewedBy: "Admin02",
  },
  {
    name: "Noah",
    userId: "",
    userType: "Investment seeker",
    email: "xyz@gmail.com",
    applicationDate: "22/02/2025",
    status: "Rejected",
    reviewedBy: "Admin02",
  },
];

// Status Badge Class
const statusClass = (status) => {
  switch (status) {
    case "Pending":
      return "bg-gray-200 text-gray-700";
    case "Accepted":
      return "bg-green-200 text-green-700";
    case "Rejected":
      return "bg-red-200 text-red-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};
</script>
<style scoped>
table {
  border-spacing: 0;
}
.g-custom {
  grid-template-columns: repeat(4, 1fr);
}
.bg-custom {
  background-color: skyblue;
  width: 18px;
  height: 18px;
}

.sort {
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>

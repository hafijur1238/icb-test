<template>
	<div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-28 mb-20">
		<!-- Back Button -->
		<div class="mb-6">
			<button
				@click="goBack"
				class="text-blue-600 hover:text-blue-800 font-semibold"
			>
				← Back
			</button>
		</div>

		<!-- Header -->
		<div class="text-center mb-8">
			<h2 class="text-2xl font-semibold text-gray-800">
				Join us today to connect with great ventures and <br />
				make the most of your investments!
			</h2>
		</div>

		<!-- Registration Notice -->
		<div class="bg-[#AEA491] p-6 rounded-lg mb-6">
			<h3 class="font-semibold text-white">*Registration Notice</h3>
			<p class="text-sm text-white">
				To complete your registration, payment of [amount] is required.
			</p>
			<ul class="list-disc text-sm text-white pl-4">
				<li>Mobile Wallet</li>
				<li>Bank Transfer</li>
				<li>Cash Payment</li>
			</ul>
		</div>

		<!-- Form -->
		<form
			@submit.prevent="handleSubmit"
			class="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			<!-- Full Name -->
			<div>
				<label class="block text-gray-700">Full Name</label>
				<input
					v-model="form.fullName"
					type="text"
					class="input-field"
					placeholder="Enter full name"
				/>
			</div>

			<!-- Email -->
			<div>
				<label class="block text-gray-700">Email Address</label>
				<input
					v-model="form.email"
					type="email"
					class="input-field"
					placeholder="Enter email"
				/>
			</div>

			<!-- NID -->
			<div>
				<label class="block text-gray-700">NID Number</label>
				<input
					v-model="form.nid"
					type="text"
					class="input-field"
					placeholder="Enter NID number"
				/>
			</div>

			<!-- Upload NID Image -->
			<div>
				<label class="block text-gray-700">Upload NID Image</label>
				<input
					type="file"
					class="file-input"
					@change="handleFileChange('nidImage', $event)"
				/>
			</div>

			<!-- Phone -->
			<div>
				<label class="block text-gray-700">Phone Number</label>
				<input
					v-model="form.phone"
					type="text"
					class="input-field"
					placeholder="Enter phone number"
				/>
			</div>

			<!-- Passport -->
			<div>
				<label class="block text-gray-700">Passport Number (optional)</label>
				<input
					v-model="form.passport"
					type="text"
					class="input-field"
					placeholder="Enter passport number"
				/>
			</div>

			<!-- Upload Passport Photo -->
			<div>
				<label class="block text-gray-700">Upload Passport Photo</label>
				<input
					type="file"
					class="file-input"
					@change="handleFileChange('passportImage', $event)"
				/>
			</div>

			<!-- Upload Profile Image -->
			<div>
				<label class="block text-gray-700">Upload Profile Image</label>
				<input
					type="file"
					class="file-input"
					@change="handleFileChange('profileImage', $event)"
				/>
			</div>

			<!-- Division -->
			<div>
				<label class="block text-gray-700">Division</label>
				<select
					v-model="form.division"
					@change="loadDistricts"
					class="input-field"
				>
					<option value="" disabled>Select Division</option>
					<option
						v-for="division in divisions"
						:key="division.id"
						:value="division.id"
					>
						{{ division.name }}
					</option>
				</select>
			</div>

			<!-- District -->
			<div>
				<label class="block text-gray-700">District</label>
				<select
					v-model="form.district"
					@change="loadThanas"
					class="input-field"
				>
					<option value="" disabled>Select District</option>
					<option
						v-for="district in districts"
						:key="district.id"
						:value="district.id"
					>
						{{ district.name }}
					</option>
				</select>
			</div>

			<!-- Thana -->
			<div>
				<label class="block text-gray-700">Thana</label>
				<select v-model="form.thana" class="input-field">
					<option value="" disabled>Select Thana</option>
					<option v-for="thana in thanas" :key="thana.id" :value="thana.id">
						{{ thana.name }}
					</option>
				</select>
			</div>

			<!-- Address -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Full Address</label>
				<textarea
					v-model="form.address"
					class="input-field"
					placeholder="Enter full address"
				></textarea>
			</div>

			<!-- Payment Method -->
			<div>
				<label class="block text-gray-700">Payment Method</label>
				<select v-model="form.paymentMethod" class="input-field">
					<option value="" disabled>Select Payment Method</option>
					<option value="1">Mobile Wallet</option>
					<option value="2">Bank Transfer</option>
					<option value="3">Cash Payment</option>
				</select>
			</div>

			<!-- Transaction ID -->
			<div>
				<label class="block text-gray-700">Transaction ID</label>
				<input
					v-model="form.transactionId"
					type="text"
					class="input-field"
					placeholder="Enter transaction ID"
				/>
			</div>

			<!-- Investment Amount -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Investment Amount</label>
				<input
					v-model="form.investmentAmount"
					type="number"
					class="input-field"
					placeholder="Enter investment amount"
				/>
			</div>

			<!-- Submit Button -->
			<div class="col-span-1 sm:col-span-2 text-center mt-6">
				<button
					type="submit"
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "#imports";

const router = useRouter();

// Static Division, District, Thana data
const divisions = [
	{ id: 1, name: "Dhaka" },
	{ id: 2, name: "Chattogram" },
	{ id: 3, name: "Sylhet" },
];

const districtsData = {
	1: [
		{ id: 11, name: "Dhaka District" },
		{ id: 12, name: "Gazipur" },
	],
	2: [
		{ id: 21, name: "Chattogram District" },
		{ id: 22, name: "Cox's Bazar" },
	],
	3: [{ id: 31, name: "Sylhet District" }],
};

const thanasData = {
	11: [
		{ id: 101, name: "Banani" },
		{ id: 102, name: "Gulshan" },
	],
	12: [{ id: 121, name: "Tongi" }],
	21: [{ id: 201, name: "Pahartali" }],
	22: [{ id: 221, name: "Teknaf" }],
	31: [{ id: 301, name: "Beanibazar" }],
};

const districts = ref([]);
const thanas = ref([]);

const form = reactive({
	fullName: "",
	email: "",
	nid: "",
	phone: "",
	passport: "",
	division: "",
	district: "",
	thana: "",
	address: "",
	paymentMethod: "",
	transactionId: "",
	investmentAmount: "",
	nidImage: null,
	passportImage: null,
	profileImage: null,
});

// Handle file change
const handleFileChange = (field, event) => {
	form[field] = event.target.files?.[0];
};

const loadDistricts = () => {
	districts.value = districtsData[form.division] || [];
	form.district = "";
	thanas.value = [];
	form.thana = "";
};

const loadThanas = () => {
	thanas.value = thanasData[form.district] || [];
	form.thana = "";
};

// Form Submit
const handleSubmit = async () => {
	try {
		await $fetch("http://103.174.50.71:8080/investor", {
			method: "POST",
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJQ0JBRDAyMjIyMDkiLCJpYXQiOjE3NDQ0ODc5NTcsInJvbGVzIjoiUk9MRV9BRE1JTiIsImV4cCI6MTc0NDQ5MDk1N30.Xq8NsFRT2Mh--liH0s5YNUa8eEwk8eK-vOhgmGpJ5IE",
				"Content-Type": "application/json",
			},
			body: {
				fullName: form.fullName,
				nid: form.nid,
				nidUrl: form.nidImage?.name || "",
				passPortSizePhoto: form.profileImage?.name || "",
				passportNumber: form.passport,
				passportPhotoUrl: form.passportImage?.name || "",
				phoneNumber: form.phone,
				email: form.email,
				divisionId: Number(form.division),
				districtId: Number(form.district),
				thanaId: Number(form.thana),
				address: form.address,
				paymentMethodId: Number(form.paymentMethod),
				transactionId: form.transactionId,
				bankStatementUrl: "",
				investmentAmount: Number(form.investmentAmount),
			},
		});

		alert("Form submitted successfully!");
		router.push("/thank-you");
	} catch (err) {
		console.error("Submission error:", err);
		alert("Form submission failed!");
	}
};

const goBack = () => {
	router.go(-1);
};
</script>

<style scoped>
.input-field {
	@apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
.file-input {
	@apply w-full px-4 py-2 border border-dashed border-gray-400 rounded-lg cursor-pointer;
}
</style>

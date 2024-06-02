<template>
<div class="min-h-screen flex bg-shelf flex-col w-full items-center bg-cover gra p-6 md:p-24" >
        <div class="flex flex-col w-full  relative items-center">
        <div class="h-3 w-full bg-red-700 absolute mt-16 md:w-52"></div>
        <p class="text-3xl md:text-9xl font-serif z-10  label-font">Form</p>
      </div>
      <div class="form-card">
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <input type="text" v-model="form.name" placeholder="Name" />
        <input type="text" v-model="form.surname" placeholder="Surname" />
      </div>
      <input type="email" v-model="form.email" placeholder="Email" />
      <input type="tel" v-model="form.phone" placeholder="Phone Number" />
      <textarea v-model="form.comments" placeholder="Comments"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
      </div>
   
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        comments: '',
      },
      backgroundStyle: {
        backgroundImage: 'url("./src/assets/shelf.JPG")',
        filter: 'grayscale(100%)',
        height: '100vh',  // Full viewport height
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
    }
  }
}
</script>

<style>
.form-card {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

input[type="text"], input[type="email"], input[type="tel"], textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* Makes padding not affect width */
}

.input-group {
  display: flex;
  gap: 10px;
}

.input-group > input[type="text"] {
  flex: 1;
}

button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #555;
}
</style>
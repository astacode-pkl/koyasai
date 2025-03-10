import { ref, onMounted } from "vue";

export function useCompanyProfile() {
  const companyProfile = ref([]);

  const getDataComprof = async () => {
    try {
      const response = await fetch(
        "https://guiding-gentle-yak.ngrok-free.app/api/companyprofile",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
  
      const data = await response.json();
  
      if (response.ok && data.status === 200) { 
        companyProfile.value = data.companyprofile; 
        console.log("Data Company Profile:", data.companyprofile);
      } else {
        console.error("Error fetching:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  onMounted(() => {
    getDataComprof();
  });
  
  return { companyProfile, getDataComprof };
}

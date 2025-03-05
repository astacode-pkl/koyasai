import { ref, onMounted } from "vue";

export function useNews() {
  const news = ref([]);

  const getDataNews = async () => {
    try {
      const response = await fetch(
        "https://guiding-gentle-yak.ngrok-free.app/api/news",
        {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.status === 200) {
        news.value = data.news;
      } else {
        console.error("Error fetching:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMounted(() => {
    getDataNews();
  });

  return { news, getDataNews };
}

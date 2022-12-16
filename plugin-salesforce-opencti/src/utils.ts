export const loadScript = async (url: string) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
    script.addEventListener("load", resolve);
    script.addEventListener("error", reject);
  });

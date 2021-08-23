const CACHE_NAME = "v1"
const cache_urls = ["/offline/view.html","/offline/style.css"]

self.addEventListener("install",function(ev){
	console.log("Instalado")

	caches.open(CACHE_NAME)
		.then(function(cache){
			console.log("open cache")
			return cache.addAll(cache_urls)
		})
})

self.addEventListener("fetch",function(ev){
	ev.respondWith(
		caches.match(ev.request)
			.then(function(response){
				if(response){
					return response 
				}

				return fetch(ev.request) 

			}).catch(function(err){
				if(ev.request.mode == "navigate"){
					return caches.match("/offline/view.html")
				}
			})
	)
})
(function() {

    var mp3downloader = {
        ajax: function(url, method, body, callback) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open(method, url, true);

            if (method == "POST") {
                xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlhttp.setRequestHeader('X-Requested-With', "XMLHttpRequest");
            }

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === 4) {
                    callback(xmlhttp.responseText);
                }

            };
            xmlhttp.send((method == "POST") ? body : null);
        }
    };

    var injectCss = {
        vk: function() {
            return ".audio_w_covers .audio_row .audio_row__actions {	float: left;	margin-top: 12px !important;	margin-right: 30px;}.audio_w_covers .audio_row .audio_row__duration {	float: right;	visibility: visible !important;}.audio_row .audio_row__actions {	width: 160px;	margin-right: 20px;	margin-top: 2px !important;	text-align: right;}.audio_row__current .audio_inline_player {	margin-right: 28px;}.audio_row .audio_row__duration {	float: left;}.size {	font-size: .8em;	color: #939699;	position: absolute;	right:0;}.audio_row__info .downloadButton {	float: right;	z-index: 9999;}.fngfng {	cursor: pointer;	display: block;	width: 16px;	height: 16px;	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDNEY4QjBCOTQ4QTExRThBODhEOThFOTQ4RjBCRDdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDNEY4QjBDOTQ4QTExRThBODhEOThFOTQ4RjBCRDdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM0RjhCMDk5NDhBMTFFOEE4OEQ5OEU5NDhGMEJEN0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM0RjhCMEE5NDhBMTFFOEE4OEQ5OEU5NDhGMEJEN0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7m4iWOAAABj0lEQVR42ozSTShEURjG8XO5QsZMlNgQJWpSiqIRJdlpIlIWPhaoyUI+drKQpZVYyJLEzkIoiqRYKUVSlFKywmgajDEz/O/1ztA1g7d+tzN3znnO19WcnlmVrIzSdB5z6FPxaxsd8N4FXtV4i0sNNLuUbgxO+uzQg0504dYy2I0hrKKVMV6laeYfzKpJH62Bxz6W4syeLgH12KCvm1H36mtysyIIJVh+xre2C2uwWwPMZSQIuMIJznCBGnhkC7F6QzhBwBHKpZ2CPZRGA5qQAycc6Ma7dNZla7psbwc38Mt7cwvrSJVBB6hEmwQY7UFkye2MyPvY1o1kHxbV56meIx8lCGJalmq8v0addW9G0gPKcCgrsctqLjGMahTjGS/WAF0OpVEGFcpMNkzK+WziEbUywY+AGRnQjjQsyIEd41RuJ0cmWo4XMCXtAjmsCfV3RaLfjPVDylb/K4esTOmBUFhStBW50nm560SV/xQKVYQjkTEzoKooN/oVb/Hoxygyfwnw+YPB3jyHbdf48SHAAI7nWP5QpB1kAAAAAElFTkSuQmCC') no-repeat;	display:block;}";
        }
    };

    var app = {
        isTrueHostname: function() {
            var hostname = document.location.hostname;
            return (hostname.indexOf("vk.com") >= 0) ? true : false;
        },
        config: {},
        runDelegate: function() {
            this.loadModal();

        },

        init: function() {
            console.log("init");
            var self = this;

            if (this.isTrueHostname()) {

                chrome.runtime.sendMessage(chrome.runtime.id, {
                    type: 'getCfg'
                }, function(data) {
                    self.config = data;
                    console.log(data);

                    self.runDelegate();
                });

                this.onModPage(function(body) {
                    self.injectCss(body, injectCss.vk());

                    self.updateLinks(document);

                    setInterval(function() {
                        self.addMassAudioButton(document.getElementsByClassName('audio_pl_snippet__actions')[0]);

                        self.addMassMainMusic(document.getElementsByClassName('audio_page__sort_dd')[0]);
                    }, 1000);

                    self.observer.observe(body, {
                        childList: true,
                        subtree: true
                    });
                });

            }
        },

        injectCss: function(elem, text) {
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = text;
            elem.appendChild(css);
        },

        onModPage: function(callback) {
            setInterval(function() {
                if (document.body && !document.body.classList.contains("loaded_libpng")) {
                    document.body.classList.add("loaded_libpng");
                    callback(document.body);
                }
            }, 500);
        },

        hasClass: function(element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        },

        MutationObserver: window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        observer: new this.MutationObserver(function(mutations) {
            var self = this;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        const audioClassName = "audio_row";
                        if (app.hasClass(mutation.addedNodes[i], audioClassName)) {
                            app.updateOneAudio(mutation.addedNodes[i]);
                        } else {
                            app.updateLinks(mutation.addedNodes[i]);
                        }


                        if (mutation.addedNodes[i].nodeType != 1 && mutation.addedNodes[i].nodeType != 9)
                            continue;

                    }
                }
            });
        }),

        updateLinks: function(collection) {
            if (collection.nodeType == 1 || collection.nodeType == 9) {
                var audioSelector = '.audio_row';
                var audios = collection.querySelectorAll(audioSelector);
                for (var i = 0; i < audios.length; i++) {
                    this.updateOneAudio(audios[i]);
                }

                var audiosAlbum = collection.querySelectorAll(".audio_pl_item");
                for (var i = 0; i < audiosAlbum.length; i++) {
                    this.addHashEvent(audiosAlbum[i]);
                }
            }
        },

        addHashEvent: function(elem) {
            elem.addEventListener("click", function(e) {
                console.log(e);
                if (!e) return;
                var el = e.currentTarget;
                if (el) {
                    el = el.getElementsByClassName("audio_pl__cover")[0];

                    var string = el.getAttribute("onclick");
                    var result = string.match(/showAudioPlaylist\([^,]*, [^,]*, '([^\']*)', '[^\']*'\);/i);

                    console.log("hash: " + result[1]);
                    localStorage.setItem("hashA", (result[1]) ? result[1] : "");

                }
            });
        },

        updateOneAudio: function(audio) {
            'use strict';
            var link = null;

            var audioActs = audio.querySelector('.audio_row__info');
            if (audioActs.querySelector('.downloadButton')) {
                return;
            }

            var info = this.getAudioInfo(audio);

            var artist = info.artist;
            var title = info.title;

            const stringTitle = artist + " - " + title + ".mp3";

            var downloadButton = document.createElement("div");
            downloadButton.className = "downloadButton audio_act";

            downloadButton.setAttribute("style", "display:block; margin: 17px 5px 0 5px");
            const htmlLink = document.createElement("a");
            htmlLink.className = "downloadButton fngfng";
            htmlLink.setAttribute("download", stringTitle);

            htmlLink.setAttribute("href", link);
            htmlLink.href = "#";

            downloadButton.appendChild(htmlLink);

            const audiosToDownload = {
                artist: artist,
                title: title,
                url: link,
                album: "",
                fullId: audio.dataset.fullId
            };
            var self = this;
            if (htmlLink && this.config.bitrate == "showHover") {
                var size = document.createElement('div');
                size.style = "z-index: 9999; padding: 2px 5px; border: 1px solid #ccc; margin-top: -20px; display: none; background-color: #f2f4f7;";
                size.className = "size";
                size.innerText = "load...";
                htmlLink.parentNode.appendChild(size);

                htmlLink.addEventListener("mouseover", function(e) {
                    size.style.display = "block";

                    if (size.classList.contains("loaded")) return;

                    size.classList.add("loaded");

                    var url = self.getUrlMp3(audiosToDownload.fullId, function(data) {
                        var url = self.parseMp3(data);

                        if (url == 0) {
                            size.innerText = "N/A";
                        } else {
                            url.then(function(link) {
                                self.getSize(link, info.length, size);
                            });
                        }
                    });
                }, false);
                htmlLink.addEventListener("mouseout", function(e) {
                    size.style.display = "none";
                }, false);
            }

            var loader = document.createElement("span");
            loader.innerText = "0%";
            loader.style.display = "none";

            htmlLink.parentNode.appendChild(loader);

            htmlLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                var url = self.getUrlMp3(audiosToDownload.fullId, function(data) {
                    var url = self.parseMp3(data);

                    if (url) {
                        url.then(function(link) {
                            chrome.runtime.sendMessage(chrome.runtime.id, {
                                type: 'download',
                                link: link,
                                name: self.getSavePath(audiosToDownload),
                            });
                        });
                    }
                });
            });
            audioActs.insertBefore(downloadButton, audioActs.firstChild);

        },

        getSavePath: function(info) {
            const audioInfo = {};
            audioInfo.album = this.replaceRestrictedSymbols(info.album);
            audioInfo.artist = this.replaceRestrictedSymbols(info.artist);
            audioInfo.title = this.replaceRestrictedSymbols(info.title);

            var filename;
            var onlyFileName = audioInfo.artist.trim() + " - " + audioInfo.title.trim() + ".mp3";
            onlyFileName = onlyFileName.replace(/^ +/, "");

            if (!onlyFileName) {
                onlyFileName = 'Unnamed.mp3';
            }
            if (audioInfo.album) {
                if (audioInfo.album.endsWith(".")) {
                    audioInfo.album = audioInfo.album.substring(0, audioInfo.album.length - 1);
                }
                filename = this.sanitizePathString(audioInfo.album) + "/" + onlyFileName;
            } else {
                filename = onlyFileName;
            }

            return this.config.mp3Dir + "/" + filename;

        },

        bytesToStr: function(length) {
            var b = {
                0: "PB",
                1: "TB",
                2: "GB",
                3: "MB",
                4: "KB",
                5: "B"
            };
            for (var c in b) {
                var d = length / Math.pow(2, 10 * (5 - c));
                if (d >= .5) return d.toFixed(2) + " " + b[c]
            }
            return "0 B"
        },

        getSize: function(link, len, elem) {
            var length = 0;
            if (link) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("head", link, true);

                var self = this;

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState === 4) {
                        var length = xmlhttp.getResponseHeader("content-length") || xmlhttp.getResponseHeader("Content-Length");

                        var bitrate = length * 8 / 1024 / len;
                        var temp = Math.round(bitrate / 32);

                        elem.innerText = Math.min(32 * temp, 320) + "kbs - " + self.bytesToStr(length);
                    }
                };
                xmlhttp.send(null);
            }
        },

        getAudioInfo: function(audio) {
            var id = audio.getAttribute("data-full-id");
            if (id) {
                const info = JSON.parse(audio.dataset["audio"]);
                return {
                    type: "getAudioInfo",
                    fullId: audio.dataset.fullId,
                    length: info[5],
                    artist: info[4],
                    title: info[3],
                }
            }
        },

        sanitizePathString: function(audioDownloadFolder) {
            audioDownloadFolder = audioDownloadFolder || '';

            audioDownloadFolder = audioDownloadFolder.replace('\\', '/');
            if (audioDownloadFolder.endsWith('/')) {
                audioDownloadFolder = audioDownloadFolder.substring(0, audioDownloadFolder.length - 1);
            }
            return this.replaceRestrictedSymbols(audioDownloadFolder);
        },

        replaceRestrictedSymbols: function(str) {
            if (str && str[0] == '.') {
                str = str.replaceAt(0, '_');
            }
            str = str.replace(/quot;/g, "\"").replace(/<em>/g, '').replace(/<\/em>/g, '').replace('&amp;', '&');
            const array = str.split("");
            for (var i = 0; i < array.length; i++) {
                const number = array[i].charCodeAt(0);
                if (this.isWhiteSpace(number) || number == 173) {
                    array[i] = ' ';
                }
            }
            return array.join("").replace(this.restrictedSymbols, '').trim();
        },

        isWhiteSpace: function(number) {
            return number == 9 ||
                number == 10 ||
                number == 11 ||
                number == 12 ||
                number == 13 ||
                number == 32 ||
                number == 133 ||
                number == 160 ||
                number == 5760 ||
                (number >= 8192 && number <= 8202) ||
                number == 8232 ||
                number == 8233 ||
                number == 8239 ||
                number == 8287 ||
                number == 8232 ||
                number == 12288 ||
                number == 6158 ||
                number == 8203 ||
                number == 8204 ||
                number == 8205 ||
                number == 8288 ||
                number == 65279
        },

        restrictedSymbols: /[|&\/\\+":*?<>]/g,

        setCookie: function(name, value, props) {
            props = props || {};
            var exp = props.expires;
            if (typeof exp == "number" && exp) {
                var d = new Date();
                d.setTime(d.getTime() + exp * 1000);
                exp = props.expires = d
            }
            if (exp && exp.toUTCString) {
                props.expires = exp.toUTCString()
            }
            value = encodeURIComponent(value);
            var updatedCookie = name + "=" + value;
            for (var propName in props) {
                updatedCookie += "; " + propName;
                var propValue = props[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue
                }
            }
            document.cookie = updatedCookie
        },
        z: function(B) {
            var C = "vkmusic-player-data-" + Math.random();
            return new Promise(function(D) {
                var E = document.createElement("script");
                E.text = "\n(function(){\n const player = new AudioPlayerHTML5({onFrequency:function(){}});\n player.setUrl('" + B + "');\n document.body.setAttribute('" + C + "',player._currentAudioEl.src)\n})();\n", document.body.appendChild(E), D(document.body.getAttribute(C)), setTimeout(function() {
                    return document.body.getAttribute(C, "")
                })
            })
        },

        parseMp3: function(responce) {
            var json = responce.split("<!json>")[1].split("<!>")[0];
            var data = JSON.parse(json);
            if (data && data[0] && data[0][2]) {
                var lnk = data[0][2];
                var obj = this.z(lnk);
                return obj;

            }
            return 0;
        },

        getUrlMp3: function(vkId, callback) {
            var body = 'act=reload_audio&al=1&ids=' + vkId;

            this.setCookie("remixcurr_audio", vkId);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://vk.com/al_audio.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('X-Requested-With', "XMLHttpRequest");

            xhr.responseType = 'text';
            xhr.onreadystatechange = function(e) {
                if (xhr.readyState != 4) return;

                if (xhr.status == 200) {
                    callback(xhr.responseText);
                }
            };
            xhr.send(body);
        },

        text: function(response) {
            return response.text()
        },
        n: 0,
        block: false,
        items: [],
        interval: null,
        checkLoadStatus: function() {
            var self = this;
            self.interval = setInterval(function() {
                chrome.runtime.sendMessage(chrome.runtime.id, {
                    type: 'getDownloadStatus'
                }, function(downloads) {
                    if (downloads && downloads.process == 0) {
                        self.startLoadMvp();
                    }
                });
            }, 1000);
        },

        startLoadMvp: function() {
            if (this.items.length == 0) return;
            console.log("count items to download: " + this.items.length);
            var item = this.items[0];
            var self = this;
            var url = app.getUrlMp3(item.fullId, function(data) {
                var url = app.parseMp3(data);

                if (url) {
                    url.then(function(link) {

                        item.url = link;

                        var itemsTmp = [];
                        for (var i in self.items) {
                            if (i == 0) continue;

                            itemsTmp.push(self.items[i]);
                        }

                        self.items = itemsTmp;

                        chrome.runtime.sendMessage(chrome.runtime.id, {
                            type: 'download',
                            link: item.url,
                            name: app.getSavePath(item)
                        });


                    });
                } else {
                    var itemsTmp = [];
                    for (var i in self.items) {
                        if (i == 0) continue;
                        itemsTmp.push(self.items[i]);
                    }

                    self.items = itemsTmp;
                }
            });
        },

        startTimer: false,
        addToDownload: function(list) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                this.items.push(item);
                console.log("append to download: " + this.items.length);
            }
            if (this.startTimer) return 0;
            this.checkLoadStatus();
        },

        startLoad: function() {
            if (this.block) return;
            if (this.items.length == 0) return;
            var item = this.items[0];
            var url = app.getUrlMp3(item.fullId, function(data) {
                var url = app.parseMp3(data);
                url.then(function(link) {
                    item.url = link;
                    chrome.runtime.sendMessage(chrome.runtime.id, {
                        type: 'download',
                        link: item.url,
                        name: app.getSavePath(item)
                    });


                });
            });

        }
    };
    if (document.location.href.match(/https?:\/\/vk.com/)) {
        app.init();
    }
})();
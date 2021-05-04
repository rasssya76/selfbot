/*       
*
*     SC ORI/BASE : MHANKBARBAR
*     MODIFIKASI : Zitsraa , Vean
*     TAMBAHIN NICK GUA LAH ANJG!!
*     SC NYA JANGAN DIJUAL BOS,SUSAH-SUSAH BIKIN MALAH DI SHARE
*
*/

const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const {
  convertSticker
} = require("./plugins/swm.js")

const fs = require('fs')
const os = require('os');
const FormData = require('form-data')
const axios = require("axios")
const speed = require('performance-now')
const qrcodes = require("qrcode")
const qrcode = require("qrcode-terminal")
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')
const { addbot, addBot } = require('./lib/addbot')

//********** DATABASE **********//
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//*********** CUSTOMABLE ***********//

prefix = ''
setgrup = "6283141727903-1611127287@g.us"
offline = false
publik = false
waktuafk = '-'
alasanafk = 'Tidur'
f = '*'
simple = false
harga = 0
matauang = 'USD'
blocked = []
fake = '@iky_ads'
fakeimage = fs.readFileSync(`./media/Zitsraa.jpeg`)
numbernye = '0'
join = '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Askot : \`\`\` \n \`\`\`Umur :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -'
leave = '\`\`\`Sayonaraa👋\`\`\`'
promote = '*Your Welcome🥳*'
demote = '*Yahahahwahyuuu kasihaan di demote🤣*'
public = false
hit_today = []
baterai = {
	battery: "" || "Tidak terdeteksi",
	isCharge: "" || false
}

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Meikyadsシ︎\n'
            + 'ORG:Owner Iky;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283141727903:+62 831-1800-241\n'
            + 'END:VCARD'

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const XteamKey = 'c81b3345e477a0c7'        //XTEAM
const ZeksApi = 'apivinz'                  //ZEKS
const LolHuman = 'genbotkey'           //LOLHUMAN
const LolKey = 'genbotkey'                 //LOLHUMAN


//********** WAKTU **********/
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const date = new Date().toLocaleDateString()
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//********** FUNCTION AFK **********//
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Zitsraa = new WAConnection()
	Zitsraa.logger.level = 'warn'
	console.log(banner.string)
	Zitsraa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Zitsraa.json') && Zitsraa.loadAuthInfo('./Zitsraa.json')
	Zitsraa.on('connecting', () => {
		start('2', 'Tunggu Sebentar Kak🐦...')
	})
	Zitsraa.on('open', () => {
		success('2', 'Sudah Connect Kak👌..')
	})
	await Zitsraa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Zitsraa.json', JSON.stringify(Zitsraa.base64EncodedAuthInfo(), null, '\t'))

Zitsraa.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Zitsraa.sendMessage(callerId, "Telpon = BLOCK!!\nTq Autoresblock!!", MessageType.text)
        await sleep(3000)
        await Zitsraa.blockUser(callerId, "add") // Block user
})
	
	Zitsraa.on("CB:action,,battery", json => {
	  const battery = json[2][0][1].value
	  const persenbat = parseInt(battery)
	  baterai.battery = `${persenbat}%`
	  baterai.isCharge = json[2][0][1].live
})
	
Zitsraa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
*Join Group : ${mdata.subject}*
 
 ${join}`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Date : ${time} WIB\`\`\` 

\`\`\`Group :\`\`\` ${mdata.subject}

${promote}`
			Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Date : ${time} WIB\`\`\`

\`\`\`Group :\`\`\` ${mdata.subject}

${demote}`
			Zitsraa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})


	Zitsraa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	

	Zitsraa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infomek = JSON.parse(fs.readFileSync('./src/mek.data.json'))
      infomek.push(JSON.parse(JSON.stringify(mek)))
      fs.writeFileSync('./src/mek.data.json', JSON.stringify(infomek, null, 2))
       const urutan_pesan = infomek.length

       if (urutan_pesan === 5000) {
      infomek.splice(0, 4300)
      fs.writeFileSync('./src/mek.data.json', JSON.stringify(infomek, null, 2))
    }
        cekafk(afk)
        if (urutan_pesan === 5000) {
      infomek.splice(0, 4300)
      fs.writeFileSync('./database/off.json', JSON.stringify(infomek, null, 2))
    }
    		global.prefix
    		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
  			global.blocked
  			const content = JSON.stringify(mek.message)
  			const from = mek.key.remoteJid
  			const type = Object.keys(mek.message)[0]
			
    		const apiKey = setting.apiKey 
  			const { text, extendedText, contact, caption, location, liveLocation, image, video,quotedmekObj, sticker, document, audio, product } = MessageType
  			
     //BY TANAKA (ALL PREFIX)
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		  const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		  
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
				hit_today.push(command)
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}
      const totalchat = await Zitsraa.chats.all()
			const botNumber = Zitsraa.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Zitsraa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isTagedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isTagedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const isTagedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	const isTagedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	
            const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
				const sendImage = (teks) => {
		    Zitsraa.sendMessage(from, teks, image, {quoted:freply})
		    }
		    
		    const costum = (pesan, tipe, target, target2) => {
			Zitsraa.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
		    const sendPtt = (teks) => {
		    Zitsraa.sendMessage(from, audio, mp3, {quoted:freply})
		    }
			
			const reply = (teks) => {
				Zitsraa.sendMessage(from, teks, text, zits)
			}
			
			const sendMess = (hehe, teks) => {
				Zitsraa.sendMessage(hehe, teks, text,{quoted : freply})
			}
			
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		};
		download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    Zitsraa.sendMessage(to, media, type, { quoted: freply, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		});
	    }
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zitsraa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: fdocu, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			Zitsraa.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283141727903-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Zitsraa.jpeg')}}}
            

const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'Zitsraa', sellerJid: '0@s.whatsapp.net'} } } 

const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/Zitsraa.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/Zitsraa.jpeg`)
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
   //********** FUNCTION OFFLINE **********//
   
   if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJtext)) return

            addafk(mek.key.remoteJtext)
      heheh = ms(Date.now() - waktuafk) 
      Zitsraa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Zitsraa Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./media/Zitsraa.jpeg`)}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "6283141727903@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJtext)) return
                        addafk(mek.key.remoteJtext)
            heheh = ms(Date.now() - waktuafk)
            Zitsraa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Zitsraa Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./media/Zitsraa.jpeg`)}}}})
      }
        }
            }
          }
        }
      }
    }
      

const hour_now = moment().format('HH')
        var ucapanWaktu = 'Pagi🌄'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi 🌅'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Siang 🌞'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Soree ☀️'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat 🌠'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam 🌌'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }
        
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}


const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zitsraa.sendMessage(to, media, sticker,zits)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       Zitsraa.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       Zitsraa.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Zitsraa.contacts[from] != undefined ? Zitsraa.contacts[from].vname || Zitsraa.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Zitsraa'; if (!author) author = 'SELF-BOT';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
          
                  case 'menu':
                  case 'help':
            gambar = fs.readFileSync('./media/help.jpeg')
                    l = 1
               var nom = mek.participant
           const statuss = public ? 'PUBLIC': 'SELF'
		if (simple == false) inimenu = `「 *${statuss}BOT - WA* 」

*◪* *Informasi User*
*│◪* *Tag: @${nom.split("@s.whatsapp.net")[0]}*
*└◪* *Status: ${mek.key.fromMe ? 'Owner' : 'User'}*

*◪* *Informasi BOT*
*│◪* *Ver : Termux*
*│◪* *Prefix : 「 Multi Prefix 」*
*│◪* *Host : Phone*
*└◪* *WA Version : ${Zitsraa.user.phone.wa_version}*

*┌◪*  ${f}${ucapanWaktu}${f}
*│◪*  ${f}${jam} WIB${f}
*│◪*  ${f}${wita} WITA${f}
*└◪*  ${f}${wit} WIT${f}
    
*┌◪*  ${f}CREDIT : MHANKBARBAR${f}
*│◪*  ${f}Creator : Iky Ads${f}
*│◪*  ${f}Hit Today : ${hit_today.length}${f}
*│◪*  ${f}Baterai : ${baterai.battery}${f}
*└◪*  ${f}MODE : ${statuss}${f}

*◪* *STICKER*
*│◪*  *${l++}.* ${f}${prefix}sticker Reply img${f}
*│◪*  *${l++}.* ${f}${prefix}rsticker Reply img${f}
*│◪*  *${l++}.* ${f}${prefix}stickergif Reply video${f}
*│◪*  *${l++}.* ${f}${prefix}stickerwa Query${f}
*│◪*  *${l++}.* ${f}${prefix}stickerwm Nama|Author${f}
*│◪*  *${l++}.* ${f}${prefix}stickmeme Teks${f}
*│◪*  *${l++}.* ${f}${prefix}stickmeme2 Teks${f}
*│◪*  *${l++}.* ${f}${prefix}stickmeme3 Teks atas|Teks bawah${f}
*│◪*  *${l++}.* ${f}${prefix}stickwasted Reply sticker${f}
*│◪*  *${l++}.* ${f}${prefix}stickflip Reply sticker${f}
*│◪*  *${l++}.* ${f}${prefix}sticknobg Reply sticker${f}
*│◪*  *${l++}.* ${f}${prefix}nobg Reply img${f}
*│◪*  *${l++}.* ${f}${prefix}ttp Text${f}
*│◪*  *${l++}.* ${f}${prefix}ttp1Text${f}
*│◪*  *${l++}.* ${f}${prefix}take Nama|Author${f}
*│◪*  *${l++}.* ${f}${prefix}exif Nama|Author${f}
*└◪*  *${l++}.* ${f}${prefix}colong${f}

*◪* *CONVERT*
*│◪*  *${l++}.* ${f}${prefix}textmaker teks atas|teks bawah${f}
*│◪*  *${l++}.* ${f}${prefix}fdeface Url|title|desk${f}
*│◪*  *${l++}.* ${f}${prefix}fake Url|title|desk${f}
*│◪*  *${l++}.* ${f}${prefix}togif Reply stickergif${f}
*│◪*  *${l++}.* ${f}${prefix}tovideo Reply sticker${f}
*│◪*  *${l++}.* ${f}${prefix}toimg Reply sticker${f}
*└◪*  *${l++}.* ${f}${prefix}toimage Reply sticker${f}

*◪* *SYSTEM*
*│◪*  *${l++}.* ${f}${prefix}status${f}
*│◪*  *${l++}.* ${f}${prefix}self${f}
*│◪*  *${l++}.* ${f}${prefix}public${f}
*│◪*  *${l++}.* ${f}${prefix}on${f}
*│◪*  *${l++}.* ${f}${prefix}off Alasan${f}
*│◪*  *${l++}.* ${f}${prefix}runtime${f}
*│◪*  *${l++}.* ${f}${prefix}ping${f}
*│◪*  *${l++}.* ${f}${prefix}term${f}
*│◪*  *${l++}.* ${f}${prefix}blocklist${f}
*│◪*  *${l++}.* ${f}${prefix}run${f}
*│◪*  *${l++}.* ${f}${prefix}chatlist${f}
*│◪*  *${l++}.* ${f}${prefix}join Linkgroup${f}
*│◪*  *${l++}.* ${f}${prefix}getpic @tag${f}
*└◪*  *${l++}.* ${f}${prefix}getbio @tag${f}

*◪* *ADVANCE*
*│◪*  *${l++}.* ${f}${prefix}bc${f}
*│◪*  *${l++}.* ${f}${prefix}pin${f}
*│◪*  *${l++}.* ${f}${prefix}unpin${f}
*│◪*  *${l++}.* ${f}${prefix}archive${f}
*│◪*  *${l++}.* ${f}${prefix}unarchiveall${f}
*│◪*  *${l++}.* ${f}${prefix}readall${f}
*│◪*  *${l++}.* ${f}${prefix}unreadall${f}
*│◪*  *${l++}.* ${f}${prefix}delthischat${f}
*│◪*  *${l++}.* ${f}${prefix}shutdown${f}
*│◪*  *${l++}.* ${f}${prefix}jadibot${f}
*└◪*  *${l++}.* ${f}${prefix}restart${f}

*◪* *TAG*
*│◪*  *${l++}.* ${f}${prefix}sendkontag nama${f}
*│◪*  *${l++}.* ${f}${prefix}hidetag Text${f}
*│◪*  *${l++}.* ${f}${prefix}stctag Tag Stc${f}
*│◪*  *${l++}.* ${f}${prefix}imgtag Tag Img${f}
*│◪*  *${l++}.* ${f}${prefix}kontak nama|nomor${f}
*└◪*  *${l++}.* ${f}${prefix}kontag nama|nomor${f}

*◪* *SETTING*
*│◪*  *${l++}.* ${f}${prefix}setfake${f}
*│◪*  *${l++}.* ${f}${prefix}setmenu${f}
*│◪*  *${l++}.* ${f}${prefix}setthumb${f}
*│◪*  *${l++}.* ${f}${prefix}setthumbmenu${f}
*│◪*  *${l++}.* ${f}${prefix}setreply${f}
*│◪*  *${l++}.* ${f}${prefix}setmatauang${f}
*│◪*  *${l++}.* ${f}${prefix}setharga${f}
*│◪*  *${l++}.* ${f}${prefix}setbodymenu${f}
*│◪*  *${l++}.* ${f}${prefix}setwelcome${f}
*│◪*  *${l++}.* ${f}${prefix}setleave${f}
*│◪*  *${l++}.* ${f}${prefix}setpromote${f}
*└◪*  *${l++}.* ${f}${prefix}setdemote${f}

*◪* *UP STORY*
*│◪*  *${l++}.* ${f}${prefix}upswtext${f}
*│◪*  *${l++}.* ${f}${prefix}upswimg${f}
*└◪*  *${l++}.* ${f}${prefix}upswvideo${f}

*◪* *GROUP COMMANDS*
*│◪*  *${l++}.* ${f}${prefix}welcome 1/0${f}
*│◪*  *${l++}.* ${f}${prefix}linkgroup${f}
*│◪*  *${l++}.* ${f}${prefix}group tutup/buka${f}
*│◪*  *${l++}.* ${f}${prefix}add 6281xxx${f}
*│◪*  *${l++}.* ${f}${prefix}kick @tag${f}
*│◪*  *${l++}.* ${f}${prefix}promote @tag${f}
*│◪*  *${l++}.* ${f}${prefix}demote @tagadmin${f}
*│◪*  *${l++}.* ${f}${prefix}demoteall${f}
*│◪*  *${l++}.* ${f}${prefix}edotensei @tag${f}
*│◪*  *${l++}.* ${f}${prefix}listadmin${f}
*│◪*  *${l++}.* ${f}${prefix}gcingfo${f}
*│◪*  *${l++}.* ${f}${prefix}online${f}
*│◪*  *${l++}.* ${f}${prefix}infoall${f}
*│◪*  *${l++}.* ${f}${prefix}notif${f}
*└◪*  *${l++}.* ${f}${prefix}leave${f}

*◪* *STORAGE*
*│◪*  *${l++}.* ${f}${prefix}addstik Optional${f}
*│◪*  *${l++}.* ${f}${prefix}adimg Optional${f}
*│◪*  *${l++}.* ${f}${prefix}addvid Optional${f}
*│◪*  *${l++}.* ${f}${prefix}addvn Optional${f}
*│◪*  *${l++}.* ${f}${prefix}getstik Query${f}
*│◪*  *${l++}.* ${f}${prefix}getimg Query${f}
*│◪*  *${l++}.* ${f}${prefix}getvid Query${f}
*│◪*  *${l++}.* ${f}${prefix}getvn Query${f}
*│◪*  *${l++}.* ${f}${prefix}liststick${f}
*│◪*  *${l++}.* ${f}${prefix}listimg${f}
*│◪*  *${l++}.* ${f}${prefix}listvid${f}
*└◪*  *${l++}.* ${f}${prefix}listvn${f}

*◪* *DOWNLOADER*
*│◪*  *${l++}.* ${f}${prefix}play Query${f}
*│◪*  *${l++}.* ${f}${prefix}play2 Query${f}
*│◪*  *${l++}.* ${f}${prefix}searchmusic Tag audio${f}
*│◪*  *${l++}.* ${f}${prefix}ig Url${f}
*│◪*  *${l++}.* ${f}${prefix}fb Url${f}
*│◪*  *${l++}.* ${f}${prefix}tiktok Url${f}
*│◪*  *${l++}.* ${f}${prefix}tiktoknowm Url${f}
*│◪*  *${l++}.* ${f}${prefix}ytmp3 Url${f}
*└◪*  *${l++}.* ${f}${prefix}ytmp4 Url${f}

*◪* *THANKS TO :*
*│◪*  ${f}Mhankbarbar${f}
*│◪*  ${f}Zitsraa${f}
*└◪*  ${f}Vean${f}`
 
if (simple == true) inimenu = `「 *${statuss}BOT - WA* 」

*◪* *Informasi User*
*│◪* *Tag: @${sender.split('@')[0]}*
*└◪* *Status: ${isOwner ? 'Owner' : 'User'}*

*◪* *Informasi BOT*
*│◪* *Ver : Termux*
*│◪* *Prefix : 「 Multi Prefix 」*
*│◪* *Host : Phone*
*└◪* *WA Version : ${Zitsraa.user.phone.wa_version}*

*┌◪*  ${f}${ucapanWaktu}${f}
*│◪*  ${f}${jam} WIB${f}
*│◪*  ${f}${wita} WITA${f}
*└◪*  ${f}${wit} WIT${f}
    
*┌◪*  ${f}CREDIT : MHANKBARBAR${f}
*│◪*  ${f}Creator : Zitsraa${f}
*│◪*  ${f}Hit Today : ${hit_today.length}${f}
*│◪*  ${f}Baterai :${f} ${baterai.battery}
*└◪*  ${f}MODE : ${statuss}${f}

*◪* *LIST MENU*
*│◪*  *${l++}.* ${f}${prefix}menumaker${f}
*│◪*  *${l++}.* ${f}${prefix}menusystem${f}
*│◪*  *${l++}.* ${f}${prefix}menuadvance${f}
*│◪*  *${l++}.* ${f}${prefix}menutag${f}
*│◪*  *${l++}.* ${f}${prefix}menugroup${f}
*│◪*  *${l++}.* ${f}${prefix}menustorage${f}
*│◪*  *${l++}.* ${f}${prefix}menudownload${f}
*└◪*  *${l++}.* ${f}${prefix}menuowner${f}

*◪* *THANKS TO :*
*│◪*  ${f}Mhankbarbar${f}
*│◪*  ${f}Zitsraa${f}
*└◪*  ${f}Vean${f}`
Zitsraa.sendMessage(from, gambar, image,{quoted:freply, caption:inimenu})
break

//***********CASE MENU**********//
case 'menumaker':
   menumaker = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗠𝗔𝗞𝗘𝗥>*
├ ${f}${prefix}sticker Reply img${f}
├ ${f}${prefix}rsticker Reply img${f}
├ ${f}${prefix}stickergif Reply video${f}
├ ${f}${prefix}stickerwa Query${f}
├ ${f}${prefix}stickerwm Nama|Author${f}
├ ${f}${prefix}stickmeme Teks${f}
├ ${f}${prefix}nobg Reply img${f}
├ ${f}${prefix}textmaker teks atas|teks bawah${f}
├ ${f}${prefix}attp Text${f}
├ ${f}${prefix}ttp Text${f}
├ ${f}${prefix}take Nama|Author${f}
├ ${f}${prefix}exif Nama|Author${f}
├ ${f}${prefix}colong${f}
├ ${f}${prefix}fdeface Url|title|desk${f}
├ ${f}${prefix}fake Url|title|desk${f}
├ ${f}${prefix}togif Reply stickergif${f}
├ ${f}${prefix}tovideo Reply sticker${f}
├ ${f}${prefix}toimg Reply sticker${f}
└ ${f}${prefix}toimage Reply sticker${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menumaker, text)
break

case 'menusystem':
   menusystem = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗦𝗬𝗦𝗧𝗘𝗠>*
├ ${f}${prefix}status${f}
├ ${f}${prefix}self${f}
├ ${f}${prefix}public${f}
├ ${f}${prefix}runtime${f}
├ ${f}${prefix}ping${f}
├ ${f}${prefix}term${f}
├ ${f}${prefix}blocklist${f}
├ ${f}${prefix}run${f}
├ ${f}${prefix}chatlist${f}
├ ${f}${prefix}join Linkgroup${f}
├ ${f}${prefix}getpic @tag${f}
└ ${f}${prefix}getbio @tag${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menusystem, text)
break

case 'menuadvance':
   menuadvance = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗔𝗗𝗩𝗔𝗡𝗖𝗘>*
├ ${f}${prefix}bc${f}
├ ${f}${prefix}pin${f}
├ ${f}${prefix}unpin${f}
├ ${f}${prefix}archive${f}
├ ${f}${prefix}unarchiveall${f}
├ ${f}${prefix}readall${f}
├ ${f}${prefix}unreadall${f}
├ ${f}${prefix}delthischat${f}
├ ${f}${prefix}shutdown${f}
├ ${f}${prefix}jadibot${f}
└ ${f}${prefix}restart${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menuadvance, text)
break

case 'menutag':
   menutag = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗧𝗔𝗚>*
├ ${f}${prefix}sendkontag nama${f}
├ ${f}${prefix}hidetag Text${f}
├ ${f}${prefix}stctag Tag Stc${f}
├ ${f}${prefix}imgtag Tag Img${f}
├ ${f}${prefix}kontak nama|nomor${f}
└ ${f}${prefix}kontag nama|nomor${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menutag, text)
break

case 'menugroup':
   menugroup = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗚𝗥𝗢𝗨𝗣>*
├ ${f}${prefix}welcome 1/0${f}
├ ${f}${prefix}linkgroup${f}
├ ${f}${prefix}group tutup/buka${f}
├ ${f}${prefix}add 6281xxx${f}
├ ${f}${prefix}kick @tag${f}
├ ${f}${prefix}promote @tag${f}
├ ${f}${prefix}demote @tagadmin${f}
├ ${f}${prefix}demoteall${f}
├ ${f}${prefix}edotensei @tag${f}
├ ${f}${prefix}listadmin${f}
├ ${f}${prefix}online${f}
├ ${f}${prefix}infoall${f}
├ ${f}${prefix}notif${f}
└ ${f}${prefix}leave${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menugroup, text)
break

case 'menustorage':
   menustorage = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗦𝗧𝗢𝗥𝗔𝗚𝗘>*
├ ${f}${prefix}addstik Optional${f}
├ ${f}${prefix}adimg Optional${f}
├ ${f}${prefix}addvid Optional${f}
├ ${f}${prefix}addvn Optional${f}
├ ${f}${prefix}getstik Query${f}
├ ${f}${prefix}getimg Query${f}
├ ${f}${prefix}getvid Query${f}
├ ${f}${prefix}getvn Query${f}
├ ${f}${prefix}liststick${f}
├ ${f}${prefix}listimg${f}
├ ${f}${prefix}listvid${f}
└ ${f}${prefix}listvn${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menustorage, text)
break

case 'menudownload':
   menudownload = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗>*
├ ${f}${prefix}play Query${f}
├ ${f}${prefix}play2 Query${f}
├ ${f}${prefix}ig Url${f}
├ ${f}${prefix}fb Url${f}
├ ${f}${prefix}tiktok Url${f}
├ ${f}${prefix}tiktoknowm Url${f}
├ ${f}${prefix}ytmp3 Url${f}
└ ${f}${prefix}ytmp4 Url${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menudownload, text)
break

case 'menuowner':
   menuowner = `「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」
   
${f}${ucapanWaktu}${f}
${f}${time} WIB${f}
${f}${wita} WITA${f}
${f}${wit} WIT${f}

${f}Hit Today : ${hit_today.length}${f}
${f}Baterai :${f} ${baterai.battery}

*</𝗖𝗥𝗘𝗔𝗧𝗢𝗥>*
├ ${f}${prefix}setfake${f}
├ ${f}${prefix}setmenu${f}
├ ${f}${prefix}setthumb${f}
├ ${f}${prefix}setreply${f}
├ ${f}${prefix}setmatauang${f}
├ ${f}${prefix}setharga${f}
├ ${f}${prefix}setbodymenu${f}
├ ${f}${prefix}setwelcome${f}
├ ${f}${prefix}setleave${f}
├ ${f}${prefix}setpromote${f}
└ ${f}${prefix}setdemote${f}

*</𝗨𝗣𝗦𝗪>*
├ ${f}${prefix}upswtext${f}
├ ${f}${prefix}upswimg${f}
└ ${f}${prefix}upswvideo${f}

${f}THANKS TO :${f}
${f}Mhankbarbar${f}
${f}Zitsraa${f}
${f}Vean${f}

◪  𝙎𝙀𝙇𝙁 𝘽𝙊𝙏  ◪`
return reply(menuowner, text)
break
			  
			  //********** SELF&PUBLIC **********//
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Ente owner?_*')
			    public = false
			    return reply(  `*「 𝙈𝙊𝘿𝙀 : 𝙎𝙀𝙇𝙁 」*`, text)
			    break
			    
			  case 'public':
			    if (mek.key.fromMe) return reply('*Ente owner?_*')
			    public = true
			    return reply(`*「 𝙈𝙊𝘿𝙀 : 𝙋𝙐𝘽𝙇𝙄𝘾 」*`, text)
			    break
			    
			  case 'status':
			    const status = public ? '𝙋𝙐𝘽𝙇𝙄𝘾': '𝙎𝙀𝙇𝙁'
			  const onlinee = offline ? '𝙊𝙁𝙁𝙇𝙄𝙉𝙀' : '𝙊𝙉𝙇𝙄𝙉𝙀'
			    return reply(`*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*Status : ${status}*\n*Status : ${onlinee}*`, text)
			    
			    break
			    
			    case 'on':
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	return reply(`*ANDA SEKARANG ONLINE*`,text)
          	break       
          	
      	case 'off':
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args.join(" ") ? args.join(" ") : 'Tidur'
          	alasanafk = anuu
          	return reply(`*ANDA SEKARANG OFFLINE*\n*DENGAN ALASAN : ${alasanafk}*`,text)
          	break
			    
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                Zitsraa.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                Zitsraa.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
		
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Zitsraa.chats.all()
                for (let _ of anu) {
                Zitsraa.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                Zitsraa.modifyChat(from, ChatModification.archive)
                break
                
            case 'delthischat':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                Zitsraa.modifyChat(from, ChatModification.delete)
                break
                
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*Ente owner?_*')
	        await Zitsraa.sendMessage(from, `_Bye..._\n_Zitsraa off dulu yaa.._`, text,{quoted : freply})
		await sleep(1000)
                Zitsraa.close()
		break
		
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Zitsraa.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//
			  case 'setleave':
			    if (!mek.key.fromMe) return reply('*Ente owner?_*')
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					Zitsraa.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setpromote':
				  if (!mek.key.fromMe) return reply('*Ente owner?_*')
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					Zitsraa.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setdemote':
					  if (!mek.key.fromMe) return reply('*Ente owner?_*')
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setbodymenu':
				  if (!mek.key.fromMe) return reply('*Ente owner?_*')
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					Zitsraa.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setwelcome':
					  if (!mek.key.fromMe) return reply('*Ente owner?_*')
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					  case 'setharga':
					if(!mek.key.fromMe)return reply('*Ente owner?_*')
					if (!q) return reply(mess.wrongFormat)
					harga = q
					fakegroup(`Succes Mengganti Harga Fake : ${q}`)
					break
						  case 'setmatauang':
					if(!mek.key.fromMe)return reply('*Ente owner?_*')
					if (!q) return reply(mess.wrongFormat)
					matauang = q
					fakegroup(`Succes Mengganti Matauang Fake : ${q}`)
					break
			  case 'setreply':
					if(!mek.key.fromMe)return reply('*Ente owner?_*')
					if (!q) return reply(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break

				case 'setthumb':
				  if (!mek.key.fromMe) return reply('*Ente owner?_*')
				if (!isQuotedImage) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/Zitsraa.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				reply(`\`\`\`Sukses Mengganti Thumbnail\`\`\``,text)
				break
				
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Zitsraa.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Zitsraa.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Zitsraa.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'join':
				    if (!mek.key.fromMe) return reply('*Ente owner?_*')
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return reply ('pastikan link sudah benar!')
                           var response = await Zitsraa.acceptInvite(codeInvite);
                           console.log(response);
                           reply('*Udah masuk gan_*')
                           break
                           
                           
                           case 'bc':
					if (!mek.key.fromMe) return reply('*Ente owner?_*')
					if (args.length < 1) return reply('.......')
					anu = await Zitsraa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						bc = await Zitsraa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Zitsraa.sendMessage(_.jid, bc, image, {caption: `*「 ZBROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ZBROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'restart':
if (!mek.key.fromMe) return reply('*Ente owner?_*')
reply('_Restarting BOT_')
exec(`node main`)
setTimeout( () => {
					Zitsraa.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, `_Succses Restart BOT_`,text,{quoted: freply }) // ur cods
					},4000) // 1000 = 1s,
break

case 'setfake':
			 if (!mek.key.fromMe) return reply('Cmd Ini Khusus Owner')
			if (args[0] == 'chat') {
				zits = { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: '"status@broadcast"', "stanzaId": from, "fromMe": false, "id": "0D5EAADD1166F55012EB42395DE58D61" }, "message": { "productMessage": { "product": { "productImage": { "url": "https://mmg.whatsapp.net/d/f/AsFENZUsypKYO29kpNR2SrgcoBit6mDiApzGccFAPIAq.enc", "mimetype": "image/jpeg", "fileSha256": "iRrEuDPCvNe6NtOv/n+DARqlS1i2UbWqc25iw+qcwwo=", "fileLength": "19247", "height": 500, "width": 500, "mediaKey": "zvebSUI7DcnK9QHuUCJpNAtTsKai0MkvzrcNSYE5pHo=", "fileEncSha256": "t6pd+X7iNV/bwtti0KaOOjGBfOVhxPpnwnTs/QnD0Uw=", "directPath": "/v/t62.7118-24/29158005_1025181757972162_6878749864442314383_n.enc?oh=c97d5aea20257c3971a7248b339ee42d&oe=60504AC8", "mediaKeyTimestamp": "1613162019", "jpegThumbnail": fakeimage }, "productId": "3958959877488517", "title": fake, "description": "Kepoluah", "currencyCode": "IDR", "priceAmount1000": 100, "retailerId": "Kepolu", "url": "https://youtube.com/c/Zitsraa", "productImageCount": 2 }, "businessOwnerJid": numbernye } }, "messageTimestamp": "1613442626", "status": "PENDING" }}
				reply(`*Berhasil ubah Fake reply menjadi Catalog*`, text)
			} else if (args[0] == 'img') {
				 zits = { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 500, "width": 500, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fakeimage, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } }
				reply(`*Berhasil ubah Fake reply menjadi Gambar*`, text)
			} else if (args[0] == 'troli') {
				 zits = {quoted: {key: {remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 10, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'Zitsraa', sellerJid: '0@s.whatsapp.net'} } } }
				reply(`*Berhasil ubah Fake reply menjadi Troli*`, text)
			} else if (args[0] == 'toko'){
			  zits = {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`./media/Zitsraa.jpeg`)}, "title": fake, "description": "Zitsraa", "currencyCode": matauang, "priceAmount1000": harga, "retailerId": "Zits", "productImageCount": 1}, "businessOwnerJid": `6283141727903@s.whatsapp.net`}}}}
			reply(`*Berhasil ubah Fake reply menjadi Toko*`, text)
			} else if (args[0] == 'document'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "documentMessage": { "title":fake,"h":fake, 'jpegThumbnail': fs.readFileSync('./media/Zitsraa.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Fake Documment*', text)
			} else if (args[0] == 'flokasi'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title":"SELEP BOT","h": `${setting.fake}`, 'jpegThumbnail': fs.readFileSync('./media/Zitsraa.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Flocation*', text)
			} else if (args[0] == 'video'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "videoMessage": { "title":"SELEP BOT","h":fake, 'jpegThumbnail': fs.readFileSync('./media/Zitsraa.jpeg')}}}}
	 reply('*Berhasil diubah menjadi Fake Video*', text)
			} else if (args[0] == 'lokasi'){
			  zits = {quoted: {key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":fake,"h": fake, 'jpegThumbnail': fs.readFileSync('./media/Zitsraa.jpeg')}}}}
	 reply('*Berhasil diubah menjadi fake location*', text)
		} else {
 reply(`\`\`\`List Fake :\`\`\`\nimg\ndocument\ntroli\ntoko\nvideo\nflokasi\nlokasi\nchat\n\nCara penggunaan : ${prefix + command} troli`)
				  }
				break
				
				case 'setthumbmenu':
				if (!isQuotedImage) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`help`)
				fs.writeFileSync(`./media/help.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Mengganti Thumbnail Menu`, MessageType.text, { quoted: freply })
				break

				
				           case 'setmenu':
				if (!isOwner && !mek.key.fromMe) return reply('*Ente owner?*')
		          if (args[0] == 'simple') {
					  simple = true
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else if (args[0] == 'ori') {
					  	  simple = false
				  reply('*Berhasil mengubah tampilan menu!*')
				  } else {
					  reply(`\`\`\`List Pilihan :\`\`\`\nori\nsimple\n\nCara penggunaan ${prefix + command} ori`)
				  }
					break
				
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                  if (!mek.key.fromMe) return reply('*Ente owner?')
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return Zitsraa.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                Zitsraa.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                ////bybiky
                
                case '>':
var konsol = args.join(' ')
function _return(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
  err = String(e)
  reply(err)
}
break
case '$':
if (!isOwner) return 
const cod = args.join(' ')
exec(cod, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
break
                
				case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: fdocu, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'exif':
	        if (!mek.key.fromMe) return reply('*Ente owner?_*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	        
	        case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await Zitsraa.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case 'take':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Zitsraa.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
				case 'tovid':
					reply('Proses Boskuh..')
					 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
						Zitsraa.sendMessage(from, buff, video, { quoted: freply, caption: fake })
					}
					break
					
					case 'fake':
				var nn = body.slice(6)
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				Zitsraa.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
				
					case 'fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					ddatae = await imageToBase64(JSON.stringify('./media/Zitsraa.jpeg').replace(/\"/gi, ''))

					Zitsraa.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case 'nobg':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/removebg?apikey=${LolKey}&img=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: freply})
}
break

 case 'sticknobg':
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await Zitsraa.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break
									
case 'stickflip':
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=VevekKuda&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickwasted':
									 var ghs = body.slice(13)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickmeme':
									 var ghs = body.slice(11)
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/_/${ghs}.png?background=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									
									case 'stickmeme2':
									 var ghs = body.slice(12)
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen3?teks=${ghs}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickmeme3':
									 var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply('Format salah!')
									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await Zitsraa.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									

					case 'textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: freply})
}
break
					
				case 'ttp':
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp BOT`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									Zitsraa.sendMessage(from, buffer, sticker,{quoted:freply})
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
					
		case 'ttp1':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Zitsraa Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolKey}&text=${body.slice(6)}`)
				Zitsraa.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					
                    case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=${x}`)
                        Zitsraa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case 'swm':
if (type === 'imageMessage' || isTagedImage){
var kls = body.slice(5)
var pack = kls.split("|")[0];
var author = kls.split("|")[1];
const getbuff = isTagedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await Zitsraa.downloadMediaMessage(getbuff)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
Zitsraa.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fdocu})
} else {
reply('Format Salah!')
}
break
		case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${numbernye}@s.whatsapp.net`, quotedMessage: { conversation: '*Zitsraa-SELF*' } } }) 
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
					
					case 'toimg':
                                        var b = fs.readFileSync(`./media/Zitsraa.jpeg`)
                                        var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        var media = await Zitsraa.downloadMediaMessage(encmedia)
                                        if (!isQuotedSticker) return reply('Reply Stikernya su!')
                                        Zitsraa.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: freply})
                                        break
                                        
					case 'toimage':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 

					case 'ping':
					  const statusss = public ? 'PUBLIC': 'SELF'
					  var groups = Zitsraa.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Zitsraa.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					  const chatsIds = await Zitsraa.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\`
\`\`\` - [ ${Zitsraa.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${Zitsraa.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${statusss} ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4096 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                return reply(p0, text)
                    break
                    
					case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
├ *Nama bot : Zitsraa*
├ *Server :* _*Baileys*_
├ *Runtime :*
├   \`\`\`${kyun(uptime)}\`\`\`
├ *Speed :*
├   \`\`\`${latensip.toFixed(4)} Second\`\`\`
└─────────────`
			             Zitsraa.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           
			           case 'term': 
case 'exec':
if (!mek.key.fromMe) return reply('*Ente owner?_*')
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Zitsraa.sendMessage(from, ` ${err}`, text, { quoted: fdocu })
if (stdout) {
Zitsraa.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  case 'kontak':
const took = body.slice(8)
const nama = took.split("|")[0]
const nomor = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	Zitsraa.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
	break
	
	case 'kontag':
const pepek = body.slice(8)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await Zitsraa.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	Zitsraa.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
	break
	
			     case 'sendkontag':
					var bv = body.slice(12)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Zitsraa.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Zitsraa.user.jid.split('@')[0]}:${Zitsraa.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Zitsraa.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: fdocu, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/Zitsraa.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await Zitsraa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Zitsraa.sendMessage(from, options, text,{quoted : freply})
					break
					
			           case 'stctag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Zitsraa.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Zitsraa.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Zitsraa.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Zitsraa.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Zitsraa.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Zitsraa.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Zitsraa.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case 'grup':
					case 'gc':
					case 'group':
			  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
				  var groups = Zitsraa.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = Zitsraa.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					Zitsraa.updatePresence(from, Presence.composing)
					y = ` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\``
					Zitsraa.sendMessage(from, y, text, {quoted  : freply})
					break
					
			case 'groupinfo':
case 'ingfogc':
  case 'infogc':
case 'gcingfo':
  case 'gcinfo':
	Zitsraa.updatePresence(from, Presence.composing)
	if (!isGroup) return reply(mess.only.group)
	ppUrl = await Zitsraa.getProfilePicture(from) // leave empty to get your own
	buffer = await getBuffer(ppUrl)
	Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: `*Name* : ${groupName}\n*Member* : ${groupMembers.length}\n*Admin* : ${groupAdmins.length}\n*Desc* : ${groupDesc}`})
	break
					
					case 'demote':
			      case 'dm' : 
			        if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'promote':
				case 'pm':
				  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':
					  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    break
                    
					case 'add':
					  if (!mek.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Zitsraa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
			    case 'kick':
			      if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Zitsraa.chats.get(ido).presences), Zitsraa.user.jid]
                Zitsraa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case 'infoall':
                  if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 Zitsraa BOT 」* ', members_id, true)
					break
					
					case 'edotensei':
					  case 'edotense':
					    if (!isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
					  if (!isGroupAdmins && !mek.key.fromMe) return reply('*Ente siapa?_*')
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Zitsraa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await Zitsraa.sendMessage(from, options, text)
break

      case 'leave': 
        if (!mek.key.fromMe) return reply('*Ente owner?_*')
				    if (!isGroup) return reply(mess.only.group)
			    	reply(`Akan keluar dari group ${groupMetadata.subject} dalam 3 detik`)
                    await sleep(3000)
                    await Zitsraa.groupLeave(from)
                break


				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Zitsraa.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Zitsraa.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Zitsraa.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Zitsraa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				
				//********** DOWNLOAD **********//

case 'play':   
				if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${play}&APIKEY=${XteamKey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY MUSIC 」*
				
Judul : ${anu.judul}
Size : ${anu.size}
Source : ${anu.source}
				
*[Wait] Tunggu sebentar kak..*`
				buffer = await getBuffer(anu.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				lagu = await getBuffer(anu.url)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break
				
				case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				Zitsraa.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break 
				
        case 'ig':
          if (args.length < 1) return reply('*Masukan Url nya?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=apivinz`, {method: 'get'})
					tods = ` Instagram DOWNLOADER

Username : ${anu.owner}
Caption : ${anu.caption}
`
					reply(mess.wait)
					buffer = await getBuffer(anu.result[0].url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: freply, caption : tods})
					break 
					
case 'fb':
  if (args.length < 1) return reply('*Masukan Url nya?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Judul :* ${anu.result.judul}`
					
					reply(mess.wait)
					buffer = await getBuffer(anu.result.url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					
case 'tiktok':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${query}&APIKEY=${XteamKey}`, {method: 'get'})
					reply(mess.wait)
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${LolKey}&url=${query}`)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: freply})
					break
					
					case 'tiktoknowm':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolKey}&url=${query}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					tt = `「 *TIKTOK NO WM* 」
					
*Judul:* ${anu.result.title}
*Keywords:* ${anu.result.keywords}
*Desc:* ${anu.result.description}`
 buff = await getBuffer(anu.result.link)
 Zitsraa.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: freply,caption : tt})
					break
					
				case 'ytmp4':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
*[ Wait ]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case 'ytmp3':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
*[Wait]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break

case 'searchmusic':
				if (isQuotedAudio){
				const dlfile = await Zitsraa.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				const bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break

//********** UPLOAD **********
case 'upswtext':
  if (!mek.key.fromMe) return reply('*Ente owner?')
					Zitsraa.updatePresence(from, Presence.composing)
					Zitsraa.sendMessage('status@broadcast', `${q}`, extendedText)
					Zitsraa.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
				  if (!mek.key.fromMe) return reply('*Ente owner?')
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: fdocu })
					break
					
				case 'upswvideo':
				  if (!mek.key.fromMe) return reply('*Ente owner?')
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: fdocu })
					break
					case 'run':
                			 if (!mek.key.fromMe) return ephe('Onnly Owner Ngab')
                sy = args.join(' ')
                return eval(sy)
               
break
case '?':

case '>':

case '$':
var ikyyyy = args.join(' ')

reply(util.format(eval(`;(async () => { ${ikyyyy} })()`)))

console.log(ikyyyy)

break
//********** AWIKWOK **********//
case 'jadibot':
				sesid = Math.floor(Math.random() * 99999)
                const qrdata =  await qrcodes.toDataURL(sender, { scale: 8 })
   const bufferqr = new Buffer.from(qrdata.replace('data:image/png;base64,', ''), 'base64')
   Zitsraa.sendMessage(from, bufferqr, image, {caption: `*Scan QR ini untuk Menjadikan ada BOT!!*\n\nSession id: ${sesid}\nNotifikasi:\nQR ini hanya berlaku selama 20 Detik!!\n\n_NOTE : INI HANYA NUMPANG!_`})
				break

				default:
					if (isSimi && budy != undefined){
 res = await axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${budy}`)
 reply(res.data.result)
}
if (budy.startsWith('$')){
if (!isOwner) return 
var konsol = budy.slice(1)
exec(konsol, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
} 
if (budy.startsWith('>')){
if (!isOwner) return
var konsol = budy.slice(1)
function _return(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
  err = String(e)
  reply(err)
}
	  	} else {
						return console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
/* 
*
*
*
*          THANKS TO :
*               - MHANKBARBAR$
*               - Zitsraaシ
*               - Veanz
*
*
* 
*/
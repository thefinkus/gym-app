// ── SUPABASE CONFIG ──────────────────────────────────────
// Anon key is designed for client-side use — not a secret
const SUPABASE_URL = "https://dnlsiuxumdkiykzmmwxr.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubHNpdXh1bWRraXlrem1td3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NjY0MDksImV4cCI6MjA4OTI0MjQwOX0.RVkkAiJ7Yy_EOW27pDSecwed-F4mJyjeLat3HF7o3Co";

// ── SESSION TEMPLATES (no personal data) ─────────────────

const WEIGHTS_DEFAULT = {
  "Beinpresse":{w:100,unit:"kg",zone:"Kraftbereich EG"},
  "Latzug":{w:50,unit:"kg",zone:"Kraftbereich EG"},
  "Sitzrudern (Kabel)":{w:40,unit:"kg",zone:"Kabelzug"},
  "Bankdrücken":{w:40,unit:"kg",zone:"Kraftbereich EG"},
  "Schulterdrücken KH":{w:12,unit:"kg",zone:"Freihantel"},
  "Face Pulls":{w:15,unit:"kg",zone:"Kabelzug"},
  "Beinbeuger":{w:40,unit:"kg",zone:"Kraftbereich EG"},
  "Wadenheben exz.":{w:50,unit:"kg",zone:"Kraftbereich EG"},
  "Bulgarian Split Squat":{w:12,unit:"kg KH",zone:"Freihantel"},
  "Plank":{w:120,unit:"sek",zone:"Matten"}
};

const SESSIONS = {
  "Oberkörper":[
    {name:"Rudergerät Warm-up",sets:"5 min",zone:"Cardio EG",alts:[{name:"Crosstrainer Warm-up",zone:"Cardio EG"},{name:"Fahrrad Warm-up",zone:"Cardio EG"}]},
    {name:"Bankdrücken",sets:"4×10",zone:"Kraftbereich EG",alts:[{name:"KH Bankdrücken",zone:"Freihantel"},{name:"Butterfly / Pec Deck",zone:"Kraftbereich EG"},{name:"Kabelzug Flyes",zone:"Kabelzug"}]},
    {name:"Latzug",sets:"4×10",zone:"Kraftbereich EG",alts:[{name:"Latzug OG",zone:"Kraftbereich OG"},{name:"Klimmzug-Assist",zone:"Kraftbereich EG"},{name:"Kabel-Pulldown",zone:"Kabelzug"}]},
    {name:"Sitzrudern (Kabel)",sets:"4×10",zone:"Kabelzug",alts:[{name:"Rudermaschine",zone:"Kraftbereich EG"},{name:"Kabel-Rudern OG",zone:"Kraftbereich OG"}]},
    {name:"Schulterdrücken KH",sets:"3×12",zone:"Freihantel",alts:[{name:"Maschinen Schulterdrücken",zone:"Kraftbereich EG"},{name:"Arnold Press KH",zone:"Freihantel"}]},
    {name:"Face Pulls",sets:"3×15",zone:"Kabelzug",alts:[{name:"Reverse Fly Maschine",zone:"Kraftbereich EG"},{name:"Band Pull-Aparts",zone:"Matten"}]},
    {name:"Plank",sets:"3×max",zone:"Matten",alts:[{name:"Dead Bug",zone:"Matten"},{name:"Hollow Body Hold",zone:"Matten"}]},
    {name:"Rudergerät Cool-down",sets:"5 min",zone:"Cardio EG",alts:[{name:"Crosstrainer Cool-down",zone:"Cardio EG"},{name:"Stretching",zone:"Matten"}]}
  ],
  "Unterkörper":[
    {name:"Rudergerät Warm-up",sets:"5 min",zone:"Cardio EG",alts:[{name:"Fahrrad Warm-up",zone:"Cardio EG"},{name:"Crosstrainer",zone:"Cardio EG"}]},
    {name:"Beinpresse",sets:"4×10",zone:"Kraftbereich EG",alts:[{name:"Hack Squat Maschine",zone:"Kraftbereich EG"},{name:"Goblet Squat KH",zone:"Freihantel"}]},
    {name:"Bulgarian Split Squat",sets:"3×10",zone:"Freihantel",alts:[{name:"Ausfallschritte KH",zone:"Freihantel"},{name:"Einbeinige Beinpresse",zone:"Kraftbereich EG"}]},
    {name:"Beinbeuger",sets:"4×12",zone:"Kraftbereich EG",alts:[{name:"Nordic Curls",zone:"Matten"},{name:"Stiff Leg Deadlift KH",zone:"Freihantel"}]},
    {name:"Wadenheben exz.",sets:"4×15",zone:"Kraftbereich EG",alts:[{name:"Wadenheben einbeinig",zone:"Kraftbereich EG"},{name:"Donkey Calf Raise",zone:"Kraftbereich EG"}]},
    {name:"Plank",sets:"3×max",zone:"Matten",alts:[{name:"Glute Bridge",zone:"Matten"},{name:"Side Plank",zone:"Matten"}]},
    {name:"Rudergerät Cool-down",sets:"5 min",zone:"Cardio EG",alts:[{name:"Beine stretchen",zone:"Matten"},{name:"Schaumrolle",zone:"Matten"}]}
  ],
  "Vollkörper":[
    {name:"Rudergerät Warm-up",sets:"5 min",zone:"Cardio EG",alts:[{name:"Crosstrainer",zone:"Cardio EG"}]},
    {name:"Bankdrücken",sets:"3×10",zone:"Kraftbereich EG",alts:[{name:"KH Bankdrücken",zone:"Freihantel"}]},
    {name:"Beinpresse",sets:"3×10",zone:"Kraftbereich EG",alts:[{name:"Goblet Squat KH",zone:"Freihantel"}]},
    {name:"Latzug",sets:"3×10",zone:"Kraftbereich EG",alts:[{name:"Latzug OG",zone:"Kraftbereich OG"}]},
    {name:"Beinbeuger",sets:"3×12",zone:"Kraftbereich EG",alts:[{name:"Nordic Curls",zone:"Matten"}]},
    {name:"Plank",sets:"3×max",zone:"Matten",alts:[{name:"Dead Bug",zone:"Matten"}]},
    {name:"Rudergerät Cool-down",sets:"5 min",zone:"Cardio EG",alts:[{name:"Stretching",zone:"Matten"}]}
  ]
};

const GYM_DEFAULT = {
  "Cardio EG":[
    {name:"Concept2 Rudergerät",sub:"",count:3},
    {name:"Laufband",sub:"",count:6},
    {name:"Crosstrainer",sub:"",count:4},
    {name:"Ergometer",sub:"",count:5}
  ],
  "Kraftbereich EG":[
    {name:"Beinpresse",sub:"",count:2},
    {name:"Beinbeuger liegend",sub:"",count:2},
    {name:"Wadenheben stehend",sub:"",count:1},
    {name:"Bankdrücken",sub:"",count:3},
    {name:"Latzug",sub:"",count:2},
    {name:"Butterfly / Pec Deck",sub:"",count:1},
    {name:"Klimmzug-Assist",sub:"",count:1}
  ],
  "Kabelzug":[
    {name:"Kabelzug-Station EG",sub:"",count:4},
    {name:"Functional Trainer",sub:"",count:2}
  ],
  "Kraftbereich OG":[
    {name:"Kabelzug-Station OG",sub:"",count:2},
    {name:"Rudermaschine",sub:"",count:2},
    {name:"Power Rack",sub:"",count:2},
    {name:"Kurzhantelbereich",sub:"2–40 kg",count:1}
  ],
  "Matten":[
    {name:"Mattenbereich",sub:"",count:1},
    {name:"Schaumrollen",sub:"",count:4},
    {name:"TRX",sub:"",count:2}
  ]
};

// ── STATE ────────────────────────────────────────────────

let db = null; // Supabase client
let currentUser = null;
let WEIGHTS = JSON.parse(JSON.stringify(WEIGHTS_DEFAULT));
let gym = JSON.parse(JSON.stringify(GYM_DEFAULT));
let profile = null;
let currentTab = "session";
let sessionType = "Oberkörper";
let exercises = [];
let curIdx = 0;
let altOpen = -1;
let sessionActive = false;
let profileEditing = false;
let editingDevice = -1; // index of device being edited: "zone:idx"
let sessionLog = { type: null, startedAt: null, exercises: [] };
let historyData = [];
let historyExpanded = -1;

const TABS = ["session", "history", "gym", "profile"];

// ── AUTH & SUPABASE ──────────────────────────────────────

function initSupabase() {
  if (window.supabase) {
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
}

function getSettings() {
  return JSON.parse(localStorage.getItem("gymapp_settings") || "{}");
}

function saveSettings(s) {
  localStorage.setItem("gymapp_settings", JSON.stringify(s));
}

function showLogin() {
  document.getElementById("login-screen").style.display = "flex";
  document.getElementById("app-main").style.display = "none";
}

function showApp() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app-main").style.display = "block";
}

async function sendMagicLink() {
  const email = document.getElementById("login-email").value.trim();
  const btn = document.getElementById("login-btn");
  const msg = document.getElementById("login-msg");
  if (!email) { msg.textContent = "Bitte Email eingeben."; return; }

  btn.disabled = true;
  btn.textContent = "Sende...";
  const { error } = await db.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.origin + window.location.pathname }
  });
  if (error) {
    msg.textContent = "Fehler: " + error.message;
    btn.disabled = false;
    btn.textContent = "Magic Link senden";
  } else {
    msg.textContent = "Link gesendet! Prüfe deine Email.";
    btn.textContent = "Gesendet ✓";
  }
}

async function logout() {
  await db.auth.signOut();
  currentUser = null;
  profile = null;
  showLogin();
}

// ── DATA LOADING ─────────────────────────────────────────

async function loadWeights() {
  if (db && currentUser) {
    try {
      const { data, error } = await db.from("exercise_weights").select("*");
      if (!error && data && data.length) {
        data.forEach(row => {
          WEIGHTS[row.exercise_name] = { w: Number(row.last_weight), unit: row.unit, zone: row.zone };
        });
        localStorage.setItem("gymapp_weights", JSON.stringify(WEIGHTS));
        return;
      }
    } catch (e) {
      console.error("Failed to load weights:", e);
    }
  }
  const cached = JSON.parse(localStorage.getItem("gymapp_weights") || "null");
  if (cached) Object.assign(WEIGHTS, cached);
}

async function loadProfile() {
  if (db && currentUser) {
    try {
      const { data, error } = await db.from("profiles").select("*").eq("id", currentUser.id).maybeSingle();
      if (!error && data) {
        profile = data;
        return;
      }
    } catch (e) {
      console.error("Failed to load profile:", e);
    }
  }
  profile = profile || {};
}

async function saveProfile(updates) {
  if (db && currentUser) {
    const payload = { ...updates, updated_at: new Date().toISOString() };
    console.log("saveProfile: attempting upsert for user", currentUser.id);
    const { data, error, status } = await db.from("profiles").upsert({ id: currentUser.id, ...payload }).select();
    console.log("saveProfile result:", { data, error, status });
    if (error) {
      console.error("Profile save failed:", error);
      throw new Error("Profil konnte nicht gespeichert werden: " + error.message);
    }
  } else {
    console.warn("saveProfile: no db or no currentUser", { db: !!db, user: !!currentUser });
  }
  profile = { ...profile, ...updates };
}

async function loadGymEquipment() {
  if (db && currentUser) {
    try {
      const { data, error } = await db.from("gym_equipment").select("*").order("zone").order("sort_order");
      if (!error && data && data.length) {
        // Convert flat rows to grouped object
        gym = {};
        data.forEach(row => {
          if (!gym[row.zone]) gym[row.zone] = [];
          gym[row.zone].push({ id: row.id, name: row.name, sub: row.sub || "", count: row.count, note: row.note || "" });
        });
        return;
      }
    } catch (e) {
      console.error("Failed to load gym equipment:", e);
    }
  }
  // First login migration: if localStorage has gym data, use it as starting point
  const cached = JSON.parse(localStorage.getItem("gymapp_v1") || "null");
  if (cached) gym = cached;
}

async function saveGymToSupabase() {
  if (!db || !currentUser) return;
  // Delete all existing and re-insert (simple approach for personal app)
  await db.from("gym_equipment").delete().eq("user_id", currentUser.id);
  const rows = [];
  let order = 0;
  Object.entries(gym).forEach(([zone, devices]) => {
    devices.forEach(d => {
      rows.push({
        user_id: currentUser.id,
        zone,
        name: d.name,
        sub: d.sub || null,
        count: d.count,
        note: d.note || null,
        sort_order: order++
      });
    });
  });
  if (rows.length) {
    await db.from("gym_equipment").insert(rows);
  }
}

async function saveSessionToSupabase(comment) {
  const finished = new Date();
  const duration = Math.round((finished - sessionLog.startedAt) / 1000);

  const sessionData = {
    user_id: currentUser?.id,
    session_type: sessionLog.type,
    started_at: sessionLog.startedAt.toISOString(),
    finished_at: finished.toISOString(),
    duration_seconds: duration,
    comment: comment || null
  };

  const exerciseRows = sessionLog.exercises.map((ex, i) => ({
    exercise_order: i + 1,
    exercise_name: ex.name,
    planned_sets: ex.sets,
    planned_weight: ex.plannedWeight,
    actual_weight: ex.actualWeight,
    actual_weight_unit: ex.actualUnit,
    zone: ex.zone,
    was_alternative: ex.wasAlt || false,
    original_exercise: ex.originalName || null
  }));

  if (db && currentUser) {
    try {
      const { data: session, error: sErr } = await db
        .from("sessions").insert(sessionData).select("id").single();
      if (sErr) throw sErr;

      const exRows = exerciseRows.map(r => ({ ...r, session_id: session.id }));
      const { error: eErr } = await db.from("session_exercises").insert(exRows);
      if (eErr) throw eErr;

      // Upsert changed weights
      const weightUpdates = sessionLog.exercises
        .filter(ex => ex.actualWeight != null && WEIGHTS[ex.name])
        .map(ex => ({
          user_id: currentUser.id,
          exercise_name: ex.name,
          last_weight: ex.actualWeight,
          unit: ex.actualUnit,
          zone: ex.zone,
          updated_at: new Date().toISOString()
        }));

      if (weightUpdates.length) {
        await db.from("exercise_weights").upsert(weightUpdates, { onConflict: "user_id,exercise_name" });
        weightUpdates.forEach(u => {
          WEIGHTS[u.exercise_name] = { w: u.last_weight, unit: u.unit, zone: u.zone };
        });
        localStorage.setItem("gymapp_weights", JSON.stringify(WEIGHTS));
      }
      return true;
    } catch (e) {
      console.error("Supabase save failed:", e);
    }
  }

  // Offline fallback
  const pending = JSON.parse(localStorage.getItem("gymapp_pending_sync") || "[]");
  pending.push({ session: sessionData, exercises: exerciseRows });
  localStorage.setItem("gymapp_pending_sync", JSON.stringify(pending));

  const localHistory = JSON.parse(localStorage.getItem("gymapp_history") || "[]");
  localHistory.unshift({ ...sessionData, exercises: exerciseRows, id: "local_" + Date.now() });
  localStorage.setItem("gymapp_history", JSON.stringify(localHistory));

  sessionLog.exercises.forEach(ex => {
    if (ex.actualWeight != null && WEIGHTS[ex.name]) WEIGHTS[ex.name].w = ex.actualWeight;
  });
  localStorage.setItem("gymapp_weights", JSON.stringify(WEIGHTS));
  return false;
}

async function syncPending() {
  if (!db || !currentUser) return;
  const pending = JSON.parse(localStorage.getItem("gymapp_pending_sync") || "[]");
  if (!pending.length) return;
  const remaining = [];
  for (const item of pending) {
    try {
      item.session.user_id = currentUser.id;
      const { data: session, error: sErr } = await db
        .from("sessions").insert(item.session).select("id").single();
      if (sErr) throw sErr;
      const exRows = item.exercises.map(r => ({ ...r, session_id: session.id }));
      await db.from("session_exercises").insert(exRows);
    } catch (e) {
      remaining.push(item);
    }
  }
  localStorage.setItem("gymapp_pending_sync", JSON.stringify(remaining));
}

async function loadHistory() {
  if (db && currentUser) {
    try {
      const { data, error } = await db
        .from("sessions")
        .select("*, session_exercises(*)")
        .order("started_at", { ascending: false })
        .limit(50);
      if (!error && data) { historyData = data; return; }
    } catch (e) {
      console.error("Failed to load history:", e);
    }
  }
  historyData = JSON.parse(localStorage.getItem("gymapp_history") || "[]");
}

// ── NAVIGATION ───────────────────────────────────────────

function showTab(t) {
  currentTab = t;
  document.querySelectorAll(".tab-btn").forEach((b, i) => b.classList.toggle("active", TABS[i] === t));
  document.querySelectorAll(".view").forEach((v, i) => v.classList.toggle("active", TABS[i] === t));
  if (t === "session") renderSession();
  if (t === "history") { loadHistory().then(() => renderHistory()); }
  if (t === "gym") renderGym();
  if (t === "profile") { profileEditing = false; renderProfile(); }
}

// ── SESSION ──────────────────────────────────────────────

function getWeightDisplay(name) {
  const w = WEIGHTS[name];
  return w ? `${w.w} ${w.unit}` : null;
}
function getWeightNum(name) { return WEIGHTS[name]?.w ?? null; }
function getWeightUnit(name) { return WEIGHTS[name]?.unit ?? "kg"; }

function renderSession() {
  const el = document.getElementById("view-session");
  if (!sessionActive) {
    el.innerHTML = `
      <div style="font-size:15px;font-weight:500;margin-bottom:14px">Welche Session?</div>
      <div class="type-grid">
        ${["Oberkörper","Unterkörper","Vollkörper","Laufen"].map(t =>
          `<button class="type-btn${sessionType===t?" selected":""}" onclick="selectType('${t}')">${t}</button>`
        ).join("")}
      </div>
      <button class="btn primary block" onclick="startSession()" style="margin-top:4px">Starten</button>`;
  } else if (curIdx >= exercises.length) {
    const duration = Math.round((new Date() - sessionLog.startedAt) / 1000);
    const mins = Math.floor(duration / 60);
    el.innerHTML = `
      <div class="done-screen">
        <div class="done-icon">✓</div>
        <div class="done-title">Session done</div>
        <div class="done-sub">${exercises.length} Übungen · ${sessionType}</div>
        <div class="done-stats">
          <span>${mins} min</span>
          <span>${sessionLog.exercises.filter(e => e.actualWeight != null).length} Gewichte geloggt</span>
        </div>
        <textarea class="done-comment" id="session-comment" placeholder="Wie war's? (optional)"></textarea>
        <button class="btn primary block" onclick="finishSession()" id="finish-btn">Session speichern</button>
        <button class="btn ghost block" onclick="resetSession()" style="margin-top:8px">Verwerfen</button>
      </div>`;
  } else {
    const pct = Math.round(curIdx / exercises.length * 100);
    let html = `
      <div class="session-header">
        <button class="back-btn" onclick="backFromSession()">‹</button>
        <div class="progress-meta"><span>${sessionType}</span><span>${curIdx}/${exercises.length}</span></div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>`;

    exercises.forEach((ex, i) => {
      const isCur = i === curIdx, isDone = i < curIdx;
      const weightDisplay = getWeightDisplay(ex.name) || ex.fallbackWeight || "";
      const loggedWeight = sessionLog.exercises[i]?.actualWeight;

      html += `<div class="ex-card${isCur?" current":""}${isDone?" done":""}">
        <div class="ex-row">
          <div class="ex-num${isCur?" cur":""}">${isDone?"✓":i+1}</div>
          <div style="flex:1">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-detail">${ex.sets}${weightDisplay ? " · " + weightDisplay : ""}${isDone && loggedWeight != null ? " → " + loggedWeight + " " + getWeightUnit(ex.name) : ""}</div>
            <div class="ex-zone">${ex.zone}</div>
          </div>
        </div>`;

      if (isCur) {
        const wNum = getWeightNum(ex.name);
        const wUnit = getWeightUnit(ex.name);
        if (wNum != null) {
          html += `<div class="weight-input-group">
              <button class="cnt-btn" onclick="adjustWeight(-2.5)">−</button>
              <input type="text" inputmode="decimal" class="weight-input" id="weight-val" value="${wNum}" onfocus="this.select()">
              <span class="weight-unit">${wUnit}</span>
              <button class="cnt-btn" onclick="adjustWeight(2.5)">+</button>
            </div>`;
        }
        html += `<div class="ex-btns">
          <button class="btn primary sm" onclick="doneEx()">Erledigt →</button>
          ${ex.alts?.length ? `<button class="btn sm" onclick="toggleAlts(${i})">${altOpen===i?"✕ Schließen":"Besetzt?"}</button>` : ""}
        </div>`;
        if (altOpen === i && ex.alts?.length) {
          html += `<div class="alt-panel"><div class="alt-header">Alternative wählen:</div>
            ${ex.alts.map((alt, ai) => `<div class="alt-row">
                <div><div class="alt-name">${alt.name}</div><div class="alt-zone">${alt.zone}</div></div>
                <button class="btn primary sm" onclick="swapEx(${i},${ai})">Wählen</button>
              </div>`).join("")}
          </div>`;
        }
      }
      html += `</div>`;
    });
    el.innerHTML = html;
    document.querySelectorAll(".ex-card")[curIdx]?.scrollIntoView({behavior:"smooth",block:"nearest"});
  }
}

function selectType(t) { sessionType = t; renderSession(); }

function startSession() {
  if (sessionType === "Laufen") {
    document.getElementById("view-session").innerHTML = `
      <div style="padding:32px 0;text-align:center">
        <div style="font-size:17px;font-weight:500;margin-bottom:16px">Laufen</div>
        <div style="font-size:14px;color:#666;line-height:2">
          Easy: 5:40–6:00 min/km<br>Steady: 5:00–5:30 min/km<br>Tempo: 4:30–4:45 min/km
        </div>
        <button class="btn sm" style="margin-top:24px" onclick="resetSession()">← Zurück</button>
      </div>`;
    return;
  }
  exercises = JSON.parse(JSON.stringify(SESSIONS[sessionType] || SESSIONS["Oberkörper"]));
  exercises.forEach(ex => { const w = getWeightDisplay(ex.name); if (w) ex.fallbackWeight = w; });
  curIdx = 0; altOpen = -1; sessionActive = true;
  sessionLog = {
    type: sessionType, startedAt: new Date(),
    exercises: exercises.map(ex => ({
      name: ex.name, sets: ex.sets, plannedWeight: getWeightDisplay(ex.name),
      actualWeight: null, actualUnit: getWeightUnit(ex.name),
      zone: ex.zone, wasAlt: false, originalName: null
    }))
  };
  renderSession();
}

function adjustWeight(delta) {
  const input = document.getElementById("weight-val");
  if (!input) return;
  let val = Math.max(0, (parseFloat(input.value) || 0) + delta);
  input.value = Math.round(val * 2) / 2;
}

function doneEx() {
  const input = document.getElementById("weight-val");
  if (input && sessionLog.exercises[curIdx]) {
    sessionLog.exercises[curIdx].actualWeight = parseFloat(input.value) || null;
  }
  altOpen = -1; curIdx++; renderSession();
}

function toggleAlts(i) { altOpen = altOpen === i ? -1 : i; renderSession(); }

function swapEx(i, ai) {
  const o = exercises[i], alt = o.alts[ai], originalName = o.name;
  exercises[i] = { name: alt.name, sets: o.sets, zone: alt.zone,
    alts: [{name:o.name,zone:o.zone}, ...o.alts.filter((_,x)=>x!==ai)] };
  if (sessionLog.exercises[i]) {
    Object.assign(sessionLog.exercises[i], {
      name: alt.name, zone: alt.zone, plannedWeight: getWeightDisplay(alt.name),
      actualUnit: getWeightUnit(alt.name), wasAlt: true, originalName
    });
  }
  altOpen = -1; renderSession();
}

function backFromSession() {
  if (curIdx > 0 && !confirm("Session abbrechen? Fortschritt geht verloren.")) return;
  resetSession();
}

function resetSession() { sessionActive = false; curIdx = 0; altOpen = -1; renderSession(); }

async function finishSession() {
  const btn = document.getElementById("finish-btn");
  if (btn) { btn.textContent = "Speichert..."; btn.disabled = true; }
  const comment = document.getElementById("session-comment")?.value?.trim() || "";
  const ok = await saveSessionToSupabase(comment);
  if (btn) btn.textContent = ok ? "Gespeichert ✓" : "Lokal gespeichert ✓";
  setTimeout(() => resetSession(), 1500);
}

// ── HISTORY ──────────────────────────────────────────────

function renderHistory() {
  const el = document.getElementById("view-history");
  if (!historyData.length) {
    el.innerHTML = `<div class="history-empty">Noch keine Sessions. Starte deine erste!</div>`;
    return;
  }
  let html = `<div style="font-size:15px;font-weight:500;margin-bottom:14px">Session-Tagebuch</div>`;
  historyData.forEach((session, si) => {
    const date = new Date(session.started_at);
    const dateStr = date.toLocaleDateString("de-DE", { weekday: "short", day: "numeric", month: "short" });
    const timeStr = date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    const mins = session.duration_seconds ? Math.round(session.duration_seconds / 60) : "?";
    const exList = session.session_exercises || session.exercises || [];
    const isExpanded = historyExpanded === si;

    html += `<div class="history-card" onclick="toggleHistory(${si})">
      <div class="history-date">${dateStr} · ${timeStr}</div>
      <div class="history-type">${session.session_type}</div>
      <div class="history-meta">${exList.length} Übungen · ${mins} min</div>`;
    if (isExpanded && exList.length) {
      html += `<div class="history-detail">`;
      exList.forEach(ex => {
        const name = ex.exercise_name || ex.name;
        const actual = ex.actual_weight ?? ex.actualWeight;
        const unit = ex.actual_weight_unit || ex.actualUnit || "";
        const planned = ex.planned_weight || ex.plannedWeight || ex.planned_sets || ex.sets || "";
        html += `<div class="history-ex-row"><span>${name}</span>
          <span>${actual != null ? actual + " " + unit : planned}</span></div>`;
      });
      if (session.comment) html += `<div class="history-comment">${session.comment}</div>`;
      html += `</div>`;
    }
    html += `</div>`;
  });
  el.innerHTML = html;
}

function toggleHistory(i) { historyExpanded = historyExpanded === i ? -1 : i; renderHistory(); }

// ── GYM ──────────────────────────────────────────────────

function renderGym() {
  let html = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <span style="font-size:15px;font-weight:500">Mein Gym</span>
    </div>
    <label class="upload-area">
      <div class="upload-title">📷 Foto → KI erkennt Geräte</div>
      <div class="upload-sub">Gymbereich fotografieren, automatisch einloggen</div>
      <input type="file" accept="image/*" capture="environment" style="display:none" onchange="analyzePhoto(this)">
    </label>
    <div id="ai-output"></div>`;

  Object.entries(gym).forEach(([zone, devices]) => {
    html += `<div class="zone-block">
      <div class="section-label">${zone}
        <button class="del-btn" onclick="delZone('${zone}')" title="Zone löschen" style="float:right">×</button>
      </div>`;
    devices.forEach((d, di) => {
      html += `<div class="device-row" onclick="editDevice('${zone}',${di})">
        <div>
          <div class="device-name">${d.name}</div>
          ${d.sub ? `<div class="device-sub">${d.sub}</div>` : ""}
          ${d.note ? `<div class="device-sub" style="font-style:italic">${d.note}</div>` : ""}
        </div>
        <div class="counter" onclick="event.stopPropagation()">
          <button class="cnt-btn" onclick="chgCount('${zone}',${di},-1)">−</button>
          <span class="cnt-val">${d.count}</span>
          <button class="cnt-btn" onclick="chgCount('${zone}',${di},1)">+</button>
          <button class="del-btn" onclick="delDevice('${zone}',${di})">×</button>
        </div>
      </div>`;
      // Inline edit form
      if (editingDevice === zone + ":" + di) {
        html += `<div class="add-form" style="margin-top:-4px;margin-bottom:10px" onclick="event.stopPropagation()">
          <div class="input-row">
            <input class="input" id="edit-name" value="${d.name}" placeholder="Name" style="flex:1">
            <input class="input" id="edit-sub" value="${d.sub || ""}" placeholder="Typ/Marke" style="width:110px">
          </div>
          <div class="input-row">
            <input class="input" id="edit-note" value="${d.note || ""}" placeholder="Notiz (z.B. Standort)" style="flex:1">
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn primary sm" onclick="saveDeviceEdit('${zone}',${di})">Speichern</button>
            <button class="btn sm" onclick="cancelDeviceEdit()">Abbrechen</button>
          </div>
        </div>`;
      }
    });
    html += `</div>`;
  });

  const zones = Object.keys(gym);
  html += `
    <div class="section-label">Gerät hinzufügen</div>
    <div class="add-form">
      <div class="input-row">
        <input class="input" id="new-name" placeholder="Gerätename" style="flex:1">
        <input class="input" id="new-sub" placeholder="Typ / Marke" style="width:120px">
      </div>
      <div class="input-row">
        <select class="input" id="new-zone" style="flex:1">
          ${zones.map(z=>`<option value="${z}">${z}</option>`).join("")}
        </select>
        <button class="btn primary sm" onclick="addDevice()" style="flex-shrink:0">+ Add</button>
      </div>
    </div>
    <div class="section-label" style="margin-top:16px">Neue Zone</div>
    <div class="add-form">
      <div class="input-row">
        <input class="input" id="new-zone-name" placeholder="Zonenname (z.B. Stretching OG)" style="flex:1">
        <button class="btn primary sm" onclick="addZone()" style="flex-shrink:0">+ Zone</button>
      </div>
    </div>
    <div class="save-bar">
      <button class="btn primary block" id="save-btn" onclick="doSave()">Gym speichern</button>
    </div>`;

  document.getElementById("view-gym").innerHTML = html;
}

function chgCount(zone, idx, delta) {
  gym[zone][idx].count = Math.max(0, gym[zone][idx].count + delta);
  renderGym();
}

function delDevice(zone, idx) {
  gym[zone].splice(idx, 1);
  if (!gym[zone].length) delete gym[zone];
  renderGym();
}

function delZone(zone) {
  if (!confirm(`Zone "${zone}" und alle Geräte darin löschen?`)) return;
  delete gym[zone];
  renderGym();
}

function addDevice() {
  const name = document.getElementById("new-name").value.trim();
  const sub = document.getElementById("new-sub").value.trim();
  const zone = document.getElementById("new-zone").value;
  if (!name) return;
  if (!gym[zone]) gym[zone] = [];
  gym[zone].push({name, sub, count:1, note:""});
  renderGym();
}

function addZone() {
  const name = document.getElementById("new-zone-name").value.trim();
  if (!name || gym[name]) return;
  gym[name] = [];
  renderGym();
}

function editDevice(zone, idx) {
  const key = zone + ":" + idx;
  editingDevice = editingDevice === key ? -1 : key;
  renderGym();
}

function saveDeviceEdit(zone, idx) {
  gym[zone][idx].name = document.getElementById("edit-name").value.trim() || gym[zone][idx].name;
  gym[zone][idx].sub = document.getElementById("edit-sub").value.trim();
  gym[zone][idx].note = document.getElementById("edit-note").value.trim();
  editingDevice = -1;
  renderGym();
}

function cancelDeviceEdit() { editingDevice = -1; renderGym(); }

async function doSave() {
  localStorage.setItem("gymapp_v1", JSON.stringify(gym));
  await saveGymToSupabase();
  const btn = document.getElementById("save-btn");
  if (btn) { btn.textContent = "Gespeichert ✓"; setTimeout(()=>{ btn.textContent="Gym speichern"; }, 2000); }
}

async function analyzePhoto(input) {
  if (!input.files[0]) return;
  const file = input.files[0];
  const out = document.getElementById("ai-output");
  out.innerHTML = `<div class="ai-result">Analysiere Foto...</div>`;

  const settings = getSettings();
  const apiKey = settings.claudeApiKey;
  if (!apiKey) {
    out.innerHTML = `<div class="ai-result">Claude API Key fehlt. Bitte im Profil-Tab unter Einstellungen hinterlegen.</div>`;
    return;
  }
  try {
    const b64 = await new Promise((res, rej) => {
      const r = new FileReader(); r.onload = () => res(r.result.split(",")[1]); r.onerror = rej; r.readAsDataURL(file);
    });
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type":"application/json", "x-api-key": apiKey, "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514", max_tokens: 700,
        system: "Du analysierst Fotos von Fitnessstudios. Liste alle sichtbaren Geräte auf Deutsch auf. Format: Gerätename | Typ/Marke | Anzahl | Zone. Danach stelle 1-2 kurze Rückfragen wenn etwas unklar ist.",
        messages: [{role:"user",content:[{type:"image",source:{type:"base64",media_type:file.type,data:b64}},{type:"text",text:"Welche Geräte siehst du?"}]}]
      })
    });
    const data = await resp.json();
    const text = data.content?.find(b=>b.type==="text")?.text || "Keine Antwort erhalten.";
    out.innerHTML = `<div class="ai-result">${text.replace(/\n/g,"<br>")}</div>`;
  } catch(e) {
    out.innerHTML = `<div class="ai-result">Fehler beim Analysieren. Nochmal versuchen.</div>`;
  }
}

// ── PROFILE ──────────────────────────────────────────────

function renderProfile() {
  const p = profile || {};
  const settings = getSettings();
  const el = document.getElementById("view-profile");

  if (profileEditing) {
    const restrictions = p.restrictions || [];
    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:15px;font-weight:500">Profil bearbeiten</span>
        <button class="btn sm" onclick="cancelProfileEdit()">Abbrechen</button>
      </div>
      <div class="section-label">Basis</div>
      <div class="add-form" style="margin-bottom:16px">
        <div class="settings-field"><label>Alter</label><input type="number" id="p-age" value="${p.age||""}" placeholder="z.B. 28" inputmode="numeric"></div>
        <div class="settings-field"><label>Größe (cm)</label><input type="number" id="p-height" value="${p.height||""}" placeholder="z.B. 180" inputmode="numeric"></div>
        <div class="settings-field"><label>Gewicht</label><input type="text" id="p-weight" value="${p.weight||""}" placeholder="z.B. 65-70 kg"></div>
        <div class="settings-field"><label>Marathon Best</label><input type="text" id="p-marathon" value="${p.marathon_best||""}" placeholder="z.B. 3:45"></div>
        <div class="settings-field"><label>Identität</label><input type="text" id="p-identity" value="${p.identity||""}" placeholder="z.B. Hybrid-Athlet"></div>
      </div>
      <div class="section-label">Ziele & Notizen</div>
      <div class="add-form" style="margin-bottom:16px">
        <div class="settings-field"><label>Ziele</label><textarea class="input" id="p-goals" rows="3" placeholder="Was willst du erreichen?">${p.goals||""}</textarea></div>
        <div class="settings-field"><label>Notizen für KI</label><textarea class="input" id="p-notes" rows="3" placeholder="Zusätzliche Infos die ein KI-Coach wissen sollte...">${p.notes||""}</textarea></div>
      </div>
      <div class="section-label">Einschränkungen</div>
      <div id="restrictions-list">
        ${restrictions.map((r, i) => `
          <div class="add-form" style="margin-bottom:8px">
            <div class="input-row">
              <input class="input" id="r-name-${i}" value="${r.name}" placeholder="Name" style="flex:1">
              <input class="input" id="r-note-${i}" value="${r.note}" placeholder="Hinweis" style="flex:1">
              <button class="btn sm" onclick="removeRestriction(${i})" style="flex-shrink:0">×</button>
            </div>
          </div>`).join("")}
      </div>
      <button class="btn sm" onclick="addRestriction()" style="margin-bottom:16px">+ Einschränkung</button>
      <div class="save-bar">
        <button class="btn primary block" onclick="saveProfileForm()" id="profile-save-btn">Profil speichern</button>
      </div>`;
  } else {
    const age = p.age ? p.age + " Jahre" : "–";
    const height = p.height ? (p.height/100).toFixed(2).replace(".",",") + " m" : "–";
    const restrictions = p.restrictions || [];

    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:15px;font-weight:500">Profil</span>
        <button class="btn sm" onclick="startProfileEdit()">Bearbeiten</button>
      </div>
      <div style="margin-bottom:22px">
        <div class="section-label">Basis</div>
        ${[
          ["Alter / Größe", (p.age ? p.age : "–") + " · " + (p.height ? (p.height/100).toFixed(2).replace(".",",") + " m" : "–")],
          ["Gewicht", p.weight || "–"],
          ["Marathon Best", p.marathon_best ? p.marathon_best + " h" : "–"],
          ["Identität", p.identity || "–"]
        ].map(([l,v])=>`<div class="profile-row"><span class="profile-label">${l}</span><span class="profile-val">${v}</span></div>`).join("")}
        ${p.goals ? `<div class="profile-row"><span class="profile-label">Ziele</span><span class="profile-val" style="max-width:60%;text-align:right">${p.goals}</span></div>` : ""}
        ${p.notes ? `<div class="profile-row"><span class="profile-label">Notizen</span><span class="profile-val" style="max-width:60%;text-align:right">${p.notes}</span></div>` : ""}
      </div>
      <div style="margin-bottom:22px">
        <div class="section-label">Arbeitsgewichte</div>
        ${Object.entries(WEIGHTS).map(([n,d])=>`
          <div class="profile-row">
            <div><div>${n}</div><div style="font-size:12px;color:#bbb">${d.zone}</div></div>
            <span class="profile-val">${d.w} ${d.unit}</span>
          </div>`).join("")}
      </div>
      ${restrictions.length ? `<div style="margin-bottom:22px">
        <div class="section-label">Einschränkungen</div>
        ${restrictions.map(r=>`<div class="profile-row"><span class="profile-label">${r.name}</span><span class="badge">${r.note}</span></div>`).join("")}
      </div>` : ""}
      <div class="settings-section">
        <div class="section-label">Einstellungen</div>
        <div class="settings-field">
          <label>Claude API Key</label>
          <input type="password" id="set-claude-key" value="${settings.claudeApiKey || ""}" placeholder="sk-ant-...">
        </div>
        <button class="btn primary sm" onclick="saveSettingsForm()" style="margin-top:4px">Speichern</button>
        <span id="settings-status"></span>
      </div>
      <div style="margin-top:24px;text-align:center">
        <div style="font-size:12px;color:#bbb;margin-bottom:8px">${currentUser?.email || ""}</div>
        <button class="btn sm" onclick="logout()">Abmelden</button>
      </div>`;
  }
}

function startProfileEdit() { profileEditing = true; renderProfile(); }
function cancelProfileEdit() { profileEditing = false; renderProfile(); }

// Track how many restrictions we have for dynamic adding
let tempRestrictions = [];

function startProfileEdit() {
  profileEditing = true;
  tempRestrictions = [...(profile?.restrictions || [])];
  renderProfile();
}

function addRestriction() {
  tempRestrictions.push({ name: "", note: "" });
  // Save current field values before re-render
  collectRestrictionValues();
  profileEditing = true;
  profile = { ...profile, restrictions: tempRestrictions };
  renderProfile();
}

function removeRestriction(idx) {
  collectRestrictionValues();
  tempRestrictions.splice(idx, 1);
  profile = { ...profile, restrictions: tempRestrictions };
  renderProfile();
}

function collectRestrictionValues() {
  tempRestrictions = tempRestrictions.map((r, i) => ({
    name: document.getElementById(`r-name-${i}`)?.value || r.name,
    note: document.getElementById(`r-note-${i}`)?.value || r.note
  }));
}

async function saveProfileForm() {
  collectRestrictionValues();
  const updates = {
    age: parseInt(document.getElementById("p-age").value) || null,
    height: parseInt(document.getElementById("p-height").value) || null,
    weight: document.getElementById("p-weight").value.trim() || null,
    marathon_best: document.getElementById("p-marathon").value.trim() || null,
    identity: document.getElementById("p-identity").value.trim() || null,
    goals: document.getElementById("p-goals").value.trim() || null,
    notes: document.getElementById("p-notes").value.trim() || null,
    restrictions: tempRestrictions.filter(r => r.name.trim())
  };

  const btn = document.getElementById("profile-save-btn");
  if (btn) { btn.textContent = "Speichert..."; btn.disabled = true; }
  try {
    await saveProfile(updates);
  } catch (e) {
    console.error("saveProfileForm error:", e);
    alert("Speichern fehlgeschlagen — prüfe die Konsole.");
  }
  profileEditing = false;
  renderProfile();
}

function saveSettingsForm() {
  const settings = getSettings();
  settings.claudeApiKey = document.getElementById("set-claude-key").value.trim();
  saveSettings(settings);
  const status = document.getElementById("settings-status");
  status.innerHTML = `<span class="connection-status ok">Gespeichert ✓</span>`;
  setTimeout(() => { if (status) status.innerHTML = ""; }, 2000);
}

// ── INIT ─────────────────────────────────────────────────

async function init() {
  initSupabase();
  if (!db) { showLogin(); return; }

  // Listen for auth state changes (magic link redirect)
  db.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      currentUser = session.user;
      showApp();
      await Promise.all([loadWeights(), loadProfile(), loadGymEquipment(), loadHistory(), syncPending()]);
      renderSession();
      renderHistory();
    } else {
      currentUser = null;
      showLogin();
    }
  });

  // Check if already logged in
  const { data: { user } } = await db.auth.getUser();
  console.log("init: getUser result", user ? user.email : "no user");
  if (user) {
    currentUser = user;
    showApp();
    await Promise.all([loadWeights(), loadProfile(), loadGymEquipment(), loadHistory(), syncPending()]);
    renderSession();
    renderHistory();
  } else {
    showLogin();
  }
}

init();

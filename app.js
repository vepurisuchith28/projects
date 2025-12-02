// ----------------------
// Supabase Configuration
// ----------------------
const SUPABASE_URL = "https://nffjvjulrnqxwnibyfhe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmp2anVscm5xeHduaWJ5ZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NDUxODQsImV4cCI6MjA4MDEyMTE4NH0.6pdy1oKFKIL8VU60B-nrR50f5hA1NN8WUQ4z9FIbLRE";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ----------------------
// SIGNUP FUNCTION
// ----------------------
async function signupUser(event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabaseClient.auth.signUp({ email, password });

    if (authError) {
        alert("Signup failed: " + authError.message);
        return;
    }

    // Insert user into 'users' table
    const { error: tableError } = await supabaseClient.from("users").insert({ email, password });

    if (tableError) {
        alert("Failed to save user: " + tableError.message);
        return;
    }

    alert("Signup successful!");
    window.location.href = "index.html";
}

// ----------------------
// LOGIN FUNCTION
// ----------------------
async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        alert("Login failed: " + error.message);
        return;
    }

    alert("Login successful!");
    window.location.href = "dashboard.html";
}

// ----------------------
// CHECK LOGIN FUNCTION
// ----------------------
async function checkLogin() {
    const { data } = await supabaseClient.auth.getSession();

    if (!data.session) {
        window.location.href = "index.html";
    }
}

// ----------------------
// LOGOUT FUNCTION
// ----------------------
async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "index.html";
}

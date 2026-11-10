// Renders CERTIFICATES (from certificates-data.js) into:
//   #cert-preview  - index.html, shows the newest few (count from data-limit)
//   #cert-list     - certifications.html, shows everything with issuer filter + search
(function () {
    if (typeof CERTIFICATES === "undefined") return;

    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function formatDate(value) {
        if (!value) return "";
        const [year, month] = value.split("-");
        const m = parseInt(month, 10);
        return m >= 1 && m <= 12 ? `${MONTHS[m - 1]} ${year}` : year;
    }

    // Newest first; undated certificates go last.
    function sortByDate(list) {
        return [...list].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        }[c]));
    }

    function cardHtml(cert) {
        const meta = [];
        if (cert.date) {
            meta.push(`<span><i class="far fa-calendar"></i> ${formatDate(cert.date)}</span>`);
        }
        if (cert.duration) {
            meta.push(`<span><i class="far fa-clock"></i> ${escapeHtml(cert.duration)}</span>`);
        }
        if (cert.grade) {
            meta.push(`<span><i class="fas fa-award"></i> Grade: ${escapeHtml(cert.grade)}</span>`);
        }
        if (cert.platform) {
            meta.push(`<span><i class="fas fa-laptop"></i> ${escapeHtml(cert.platform)}</span>`);
        }

        const skills = (cert.skills || [])
            .map(s => `<span class="cert-skill">${escapeHtml(s)}</span>`)
            .join("");

        const link = cert.credentialUrl
            ? `<a class="cert-link" href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noopener">
                   View credential <i class="fas fa-arrow-up-right-from-square"></i>
               </a>`
            : "";

        return `
            <article class="cert-card">
                <div class="cert-header">
                    <div class="cert-badge"><i class="${escapeHtml(cert.icon || "fas fa-certificate")}"></i></div>
                    <div>
                        <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
                        <p class="cert-issuer">${escapeHtml(cert.issuer)}</p>
                    </div>
                </div>
                ${meta.length ? `<div class="cert-meta">${meta.join("")}</div>` : ""}
                ${skills ? `<div class="cert-skills">${skills}</div>` : ""}
                ${link}
            </article>`;
    }

    function render(container, list) {
        container.innerHTML = list.length
            ? list.map(cardHtml).join("")
            : `<p class="cert-empty">No certificates match your search.</p>`;
    }

    document.addEventListener("DOMContentLoaded", function () {
        const sorted = sortByDate(CERTIFICATES);

        // Preview on the home page
        const preview = document.getElementById("cert-preview");
        if (preview) {
            const limit = parseInt(preview.dataset.limit, 10) || 3;
            render(preview, sorted.slice(0, limit));
            const count = document.getElementById("cert-total");
            if (count) count.textContent = CERTIFICATES.length;
        }

        // Full list page
        const listEl = document.getElementById("cert-list");
        if (listEl) {
            const search = document.getElementById("cert-search");
            const filter = document.getElementById("cert-filter");
            const summary = document.getElementById("cert-summary");

            if (filter) {
                const issuers = [...new Set(CERTIFICATES.map(c => c.issuer))].sort();
                filter.innerHTML = `<option value="">All organizations</option>` +
                    issuers.map(i => `<option value="${escapeHtml(i)}">${escapeHtml(i)}</option>`).join("");
            }

            const update = () => {
                const q = (search ? search.value : "").trim().toLowerCase();
                const issuer = filter ? filter.value : "";
                const shown = sorted.filter(c =>
                    (!issuer || c.issuer === issuer) &&
                    (!q || [c.title, c.issuer, c.platform, ...(c.skills || [])]
                        .join(" ").toLowerCase().includes(q))
                );
                render(listEl, shown);
                if (summary) {
                    summary.textContent = `Showing ${shown.length} of ${CERTIFICATES.length} certificates`;
                }
            };

            if (search) search.addEventListener("input", update);
            if (filter) filter.addEventListener("change", update);
            update();
        }
    });
})();

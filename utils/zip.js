const AdmZip = require('adm-zip');
const fs = require('fs');

function unzipMods(zipPath, modsFolder) {
  if (!fs.existsSync(modsFolder)) {
    fs.mkdirSync(modsFolder, { recursive: true });
  }

  try {
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(modsFolder, true);
    console.log(`Extraction terminée dans ${modsFolder}`);

    // Optionnel : supprimer le ZIP après extraction
    fs.unlinkSync(zipPath);
    console.log('Fichier ZIP supprimé après extraction.');
  } catch (err) {
    console.error('Erreur pendant l’extraction :', err);
  }
}

module.exports = { unzipMods };

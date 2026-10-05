# Dedicated-server payload

Build the normal Packwiz distribution from a clean commit, then package its
indexed override files with locally available mod JARs:

```powershell
.\.venv\Scripts\python.exe packaging\tools\build_pack.py --version local-server-check --require-clean
.\.venv\Scripts\python.exe packaging\tools\build_server_payload.py --pack-dir "builds\packwiz\local-server-check-<revision12>" --jar-dir "<Prism-instance>\minecraft\mods" --previous-manifest "<previous-server-manifest.json>" --output builds\server\MechanizedDepths-server.zip
```

The second command verifies the Packwiz index and every active JAR against its
metadata SHA-1, then checks mandatory Forge dependencies for the server side. It copies every ordinary indexed override, matching the
temporary pt-2.0.0 payload's override scope. It includes only mods marked
`both` or `server`. It omits all Packwiz descriptors and standalone root
resourcepacks. The source directory may be a Prism smoke install or another
complete set of JARs with matching hashes.

The ZIP is a manual payload. It does not install Forge, replace the world, or
configure automatic updates. Stop the server before deployment. The generated
`.remove.txt` lists client-only JARs and any old JARs present in the previous
manifest but absent from the new payload. Remove those exact files from the
server's `mods/` directory before merging the ZIP at the server root. A ZIP
merge alone cannot remove stale JARs. Keep the existing Forge installation,
server launch files, world, and server properties.

The accompanying `.manifest.json` records the exact commit, pack version,
excluded JARs, and SHA-256 of every ZIP file. Neither the manual ZIP nor the
server cleanup list affects the Packwiz client index or the CurseForge and
Prism downloads for players. Server playability still needs a dedicated-server
smoke test for each changed revision.

The attached temporary pt-2.0.0 manifest came from revision
`1d9282e0b6d3330aa100717c40b689a8dd4359f9` and contained 162 JARs.
Its eight exclusions are a useful working baseline, but the current side
classification also excludes 13 UI/library JARs that happened to be present
in that server. The old manifest confirms that server started with those
JARs; it does not establish that they are needed. Do not treat the new ZIP as
gameplay-validated until it passes a dedicated-server smoke test.
Search.setIndex({"docnames": ["auth_module", "cid_info_module", "environment_variables", "falcon_discover_inventory", "falcon_hosts_inventory", "falconctl_info_module", "falconctl_module", "fctl_child_cid_info_module", "fctl_child_cids_lookup", "host_contain_module", "host_hide_module", "host_ids_lookup", "host_info_module", "index", "kernel_support_info_module", "maintenance_token_lookup", "sensor_download_info_module", "sensor_download_module", "sensor_update_builds_info_module", "sensor_update_policy_info_module"], "filenames": ["auth_module.rst", "cid_info_module.rst", "environment_variables.rst", "falcon_discover_inventory.rst", "falcon_hosts_inventory.rst", "falconctl_info_module.rst", "falconctl_module.rst", "fctl_child_cid_info_module.rst", "fctl_child_cids_lookup.rst", "host_contain_module.rst", "host_hide_module.rst", "host_ids_lookup.rst", "host_info_module.rst", "index.rst", "kernel_support_info_module.rst", "maintenance_token_lookup.rst", "sensor_download_info_module.rst", "sensor_download_module.rst", "sensor_update_builds_info_module.rst", "sensor_update_policy_info_module.rst"], "titles": ["crowdstrike.falcon.auth module \u2013 Manage authentication", "crowdstrike.falcon.cid_info module \u2013 Get CID with checksum", "Index of all Collection Environment Variables", "crowdstrike.falcon.falcon_discover inventory \u2013 CrowdStrike Falcon Discover inventory source", "crowdstrike.falcon.falcon_hosts inventory \u2013 CrowdStrike Falcon Hosts inventory source", "crowdstrike.falcon.falconctl_info module \u2013 Get values associated with Falcon sensor.", "crowdstrike.falcon.falconctl module \u2013 Configure CrowdStrike Falcon Sensor", "crowdstrike.falcon.fctl_child_cid_info module \u2013 Retrieve details about Flight Control child CIDs", "crowdstrike.falcon.fctl_child_cids lookup \u2013 fetch Flight Control child CIDs", "crowdstrike.falcon.host_contain module \u2013 Network contain hosts in Falcon", "crowdstrike.falcon.host_hide module \u2013 Hide/Unhide hosts from the Falcon console", "crowdstrike.falcon.host_ids lookup \u2013 fetch host IDs (AIDs)", "crowdstrike.falcon.host_info module \u2013 Get information about Falcon hosts", "Crowdstrike.Falcon", "crowdstrike.falcon.kernel_support_info module \u2013 Get information about kernels supported by the Falcon Sensor for Linux", "crowdstrike.falcon.maintenance_token lookup \u2013 fetch maintenance token", "crowdstrike.falcon.sensor_download_info module \u2013 Get information about Falcon Sensor Installers", "crowdstrike.falcon.sensor_download module \u2013 Download Falcon Sensor Installer", "crowdstrike.falcon.sensor_update_builds_info module \u2013 Get a list of available sensor build versions", "crowdstrike.falcon.sensor_update_policy_info module \u2013 Get information about Falcon Update Sensor Policies"], "terms": {"thi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "i": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "part": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "version": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19], "4": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "7": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "1": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "To": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "instal": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "ansibl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "galaxi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "you": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "need": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "further": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "abl": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "see": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "detail": [0, 1, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "playbook": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "specifi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "new": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "0": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "token": [0, 1, 6, 7, 9, 10, 12, 13, 14, 16, 17, 18, 19], "api": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "util": 0, "access": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "can": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "enhanc": 0, "effici": 0, "when": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "make": [0, 1, 3, 4, 7, 9, 10, 12, 14, 16, 17, 18, 19], "multipl": [0, 1, 4, 6, 7, 9, 10, 12, 14, 15, 16, 17, 18, 19], "call": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "help": [0, 14], "circumv": 0, "rate": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "limit": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19], "constraint": 0, "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "report": [0, 10], "chang": 0, "refer": 0, "document": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "inform": [0, 1, 3, 4, 7, 8, 9, 10, 11, 13, 15, 17, 18], "oauth2": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "below": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "host": [0, 1, 3, 6, 7, 13, 14, 15, 16, 17, 18, 19], "execut": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "python": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "3": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "6": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falconpi": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "comment": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "access_token": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "string": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "revok": 0, "action": [0, 9, 10], "defin": [0, 3, 6], "perform": [0, 9, 10, 17], "gener": [0, 3, 4, 14, 16], "credenti": [0, 1, 3, 4, 8], "which": [0, 11, 15, 16, 17, 18, 19], "includ": [0, 6, 12, 17, 18], "cloud": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "region": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "choic": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "default": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "client_id": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "alias": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falcon_client_id": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "client": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "id": [0, 1, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19], "more": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "about": [0, 1, 3, 4, 8, 9, 10, 11, 13, 15, 17, 18], "environ": [0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "variabl": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "also": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "client_secret": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falcon_client_secret": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "secret": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "correspond": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "all": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "automat": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "discov": [0, 1, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "except": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "u": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "gov": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falcon_cloud": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "2": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "eu": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "ext_head": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "dictionari": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "extend": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "header": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "prepend": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "member_cid": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "member": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "cid": [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "mssp": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falcon_member_cid": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "user_ag": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "custom": [0, 1, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "user": [0, 1, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "agent": [0, 1, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "request": [0, 1, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "rfc": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "7231": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "falcon_user_ag": [0, 1, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "name": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "specif": [0, 3, 4, 9, 10, 11, 12, 15, 18], "member_cid_var": 0, "an": [0, 3, 4, 10, 14, 17], "access_token_var": 0, "common": [0, 1, 5, 7, 9, 10, 12, 14, 16, 17, 18, 19], "here": [0, 1, 5, 7, 9, 10, 12, 14, 16, 17, 18, 19], "follow": [0, 1, 2, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "field": [0, 1, 5, 7, 9, 10, 12, 14, 16, 17, 18, 19], "uniqu": [0, 1, 5, 7, 9, 10, 12, 14, 16, 17, 18, 19], "kei": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "descript": [0, 1, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "success": [0, 1, 5, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19], "set": [0, 2, 3, 4, 5, 6, 11, 12, 15, 16, 17, 19], "mai": [0, 9, 10, 17], "differ": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "from": [0, 1, 3, 4, 6, 7, 8, 9, 12, 13, 14, 16, 17, 18, 19], "": [0, 1, 3, 4, 7, 9, 10, 12, 14, 16, 17, 18, 19], "argument": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "due": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "autodiscoveri": [0, 1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "process": [0, 10], "carlo": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "mato": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "carlosmmato": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "issu": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "tracker": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "repositori": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "sourc": [0, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "base": [1, 3, 4, 11, 12, 14], "provid": [1, 3, 4, 7, 9, 10, 12, 14, 16, 17, 18, 19], "must": [1, 3, 4, 8, 11, 15, 17], "sensor": [1, 10, 12, 13, 15], "download": [1, 13, 16], "read": [1, 3, 4, 7, 8, 11, 12, 14, 16, 17, 18, 19], "scope": [1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "auth": [1, 7, 9, 10, 12, 13, 14, 16, 17, 18, 19], "regist": [1, 7, 9, 10, 12, 14, 16, 17, 18, 19], "result": [1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19], "contain": [1, 5, 7, 10, 12, 13, 14, 16, 17, 18, 19], "If": [1, 3, 4, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19], "option": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19], "ignor": [1, 3, 4, 7, 9, 10, 12, 14, 15, 16, 17, 18, 19], "avoid": [1, 7, 9, 10, 11, 12, 14, 16, 17, 18, 19], "authent": [1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "sampl": [1, 3, 4, 5, 7, 12, 14, 16, 17, 18, 19], "0123456789abcdefghijklmnopqrstuv": 1, "wx": 1, "declar": 2, "plugin": [2, 3, 4, 7, 8, 9, 10, 11, 12, 15], "core": [2, 3, 4, 13], "configur": [2, 3, 4, 8, 11, 12, 13, 15, 17], "ansible_inventory_use_extra_var": [2, 3, 4], "merg": [2, 3, 4], "extra": [2, 3, 4], "var": [2, 3, 4, 9, 10, 11, 12], "avail": [2, 3, 4, 6, 11, 12, 13, 14, 16, 17, 19], "composit": [2, 3, 4], "highest": [2, 3, 4], "preced": [2, 3, 4], "crowdstrik": 2, "falcon": 2, "falcon_discov": [2, 13], "inventori": 2, "falcon_host": [2, 13], "queri": [3, 4, 5, 8, 11, 14, 15, 16, 19], "asset": [3, 4], "learn": 3, "exposur": 3, "manag": [3, 9, 10, 13], "file": [3, 4, 14, 17], "yaml": [3, 4], "end": [3, 4, 17], "yml": [3, 4], "my_inventori": [3, 4], "local": [3, 4, 8, 11, 12, 15], "control": [3, 4, 11, 13, 15], "node": [3, 4, 8, 11, 15], "allow_dupl": 3, "boolean": [3, 4, 6, 9, 10, 12, 15, 17, 19], "allow": [3, 9, 10, 17], "duplic": [3, 10], "ad": [3, 4, 6, 14, 17], "suffix": 3, "hostnam": [3, 4, 11, 12, 19], "By": [3, 4, 17], "fals": [3, 4, 6, 9, 10, 12, 15, 17], "true": [3, 4, 5, 6, 9, 10, 11, 12, 15, 17, 19], "cach": [3, 4], "toggl": [3, 4], "enabl": [3, 4, 6, 14, 19], "disabl": [3, 4, 6], "data": [3, 4, 17], "setup": [3, 4], "work": [3, 4, 17], "ini": [3, 4], "entri": [3, 4, 8, 11, 15], "ansible_inventory_cach": [3, 4], "cache_connect": [3, 4], "connect": [3, 4, 9, 12], "path": [3, 4, 17], "fact_caching_connect": [3, 4], "valu": [3, 4, 13], "ansible_cache_plugin_connect": [3, 4], "ansible_inventory_cache_connect": [3, 4], "cache_plugin": [3, 4], "memori": [3, 4], "fact_cach": [3, 4], "ansible_cache_plugin": [3, 4], "ansible_inventory_cache_plugin": [3, 4], "cache_prefix": [3, 4], "prefix": [3, 4], "tabl": [3, 4], "ansible_inventory_": [3, 4], "fact_caching_prefix": [3, 4], "remov": [3, 4, 6, 17], "16": [3, 4, 12, 16], "builtin": [3, 4, 8, 11, 15, 17], "why": [3, 4], "fix": [3, 4], "type": [3, 4, 8, 11, 12, 15, 16, 17, 19], "error": [3, 4, 9, 10], "section": [3, 4], "altern": [3, 4], "instead": [3, 4, 9, 10], "ansible_cache_plugin_prefix": [3, 4], "ansible_inventory_cache_plugin_prefix": [3, 4], "cache_timeout": [3, 4], "integ": [3, 4, 9, 10, 16], "durat": [3, 4], "second": [3, 4], "3600": [3, 4], "fact_caching_timeout": [3, 4], "ansible_cache_plugin_timeout": [3, 4], "ansible_inventory_cache_timeout": [3, 4], "compos": [3, 4], "creat": [3, 4, 14, 17, 19], "jinja2": [3, 4], "express": [3, 4, 11, 14, 16, 19], "filter": [3, 4, 6, 11, 14, 16, 19], "should": [3, 4, 9, 10, 11, 14, 15, 16, 17, 19], "fql": [3, 4, 11, 14, 16, 19], "languag": [3, 4, 11, 14, 16, 19], "syntax": [3, 4, 11, 14, 16, 19], "what": [3, 4], "group": [3, 4, 6, 12, 17, 19], "add": [3, 4, 14], "condit": [3, 4, 17], "keyed_group": [3, 4], "list": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19], "element": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19], "default_valu": [3, 4], "12": [3, 4, 6], "empti": [3, 4], "mutual": [3, 4], "exclus": [3, 4], "trailing_separ": [3, 4], "input": [3, 4, 11], "parent_group": [3, 4], "parent": [3, 4, 7, 8], "A": [3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 16, 18], "start": [3, 4, 14], "separ": [3, 4, 6], "build": [3, 4, 12, 13, 19], "_": [3, 4], "omit": [3, 4], "after": [3, 4, 9, 10, 17], "leading_separ": [3, 4], "11": [3, 4, 12, 18], "conjunct": [3, 4], "doe": [3, 4, 10, 17], "have": [3, 4, 8, 10, 11, 14, 15, 17], "underscor": [3, 4], "becaus": [3, 4], "lead": [3, 4, 17], "other": [3, 4, 11, 12, 15, 17], "given": [3, 4, 8], "deriv": [3, 4], "map": [3, 4, 14], "still": [3, 4], "concaten": [3, 4], "item": [3, 4, 9, 10], "strict": [3, 4, 9, 10], "ye": [3, 4, 6, 9, 11, 12], "invalid": [3, 4], "fatal": [3, 4], "otherwis": [3, 4, 17], "skip": [3, 4], "continu": [3, 4], "sinc": [3, 4], "possibl": [3, 4], "fact": [3, 4], "thei": [3, 4, 14], "might": [3, 4], "alwai": [3, 4, 9, 10], "we": [3, 4], "those": [3, 4, 17], "use_extra_var": [3, 4], "inventory_plugin": [3, 4], "attempt": [3, 4], "via": [3, 4, 14], "hostvar": 3, "exist": [3, 4, 17], "ip": [3, 4, 11, 12], "address": [3, 4, 12], "current": [3, 4, 17], "behavior": [3, 4], "assign": [3, 6, 12, 19], "extern": [3, 4, 12], "neither": [3, 4], "would": [3, 4, 6, 17], "config": [3, 4], "1234567890abcdef12345678": [3, 4], "1234567890abcdef1234567890abcdef12345": [3, 4], "return": [3, 4], "unmanag": 3, "past": 3, "dai": [3, 4, 10, 11], "entity_typ": 3, "first_seen_timestamp": 3, "now": [3, 4, 10, 11], "1d": 3, "within": [3, 9, 12], "week": 3, "1w": 3, "been": [3, 11], "seen": [3, 11, 12], "last_seen_timestamp": 3, "3d": 3, "last": [3, 4, 12, 14, 19], "hour": [3, 6], "rfm": [3, 4, 9], "mode": [3, 4, 11, 12, 14, 17], "reduced_functionality_mod": [3, 4, 9, 11, 12], "12h": 3, "aw": [3, 6], "cloud_provid": 3, "two": 3, "same": [3, 4, 17], "hostnamea": 3, "hostnamea_1234567890abcdef12345678": 3, "place": [3, 4], "dynam": [3, 4], "cloud_": 3, "e": 3, "g": [3, 17], "cloud_aw": 3, "platform_": [3, 4], "platform_nam": [3, 4, 9, 11, 12, 19], "platform": [3, 4, 6, 11, 12, 13, 15, 16, 18, 19], "linux": [3, 4, 6, 9, 11, 12, 13, 16, 18], "window": [3, 4, 11, 12, 16, 17, 18, 19], "etc": [3, 4], "tag_": [3, 4], "tag": [3, 4, 5, 6, 12, 18, 19], "each": [3, 4, 6, 8, 11, 15], "rfm_": 3, "No": 3, "reduc": [3, 4, 11, 12], "function": [3, 4, 11, 12], "location_": 3, "citi": 3, "locat": 3, "statement": [3, 4], "evalu": 3, "unmanaged_asset": 3, "cloud_asset": 3, "none": [3, 4, 6], "modifi": [3, 12, 14, 19], "ansible_host": [3, 4], "external_ip": [3, 4, 12], "combin": [3, 6], "server": [3, 12], "relat": 3, "ssh": 3, "privat": 3, "ansible_us": [3, 4], "root": [3, 4, 17], "ansible_ssh_private_key_fil": [3, 4], "private_key_fil": [3, 4], "support": [3, 6, 13, 16, 17], "cfg": 3, "jsonfil": [3, 4], "tmp": [3, 4, 17], "falcon_inventori": [3, 4], "1800": [3, 4], "low": [3, 4, 8, 11, 15], "high": [3, 4, 8, 11, 15], "prioriti": [3, 4, 8, 11, 15], "order": [3, 4, 8, 11, 15, 17], "For": [3, 4, 6, 8, 10, 11, 14, 15, 17, 18], "lower": [3, 4, 8, 11, 15], "overrid": [3, 4, 8, 11, 15], "higher": [3, 4, 8, 11, 15], "up": [3, 4, 8, 11, 15, 17], "templat": 4, "valid": [4, 6], "inventory_hostnam": 4, "ani": [4, 9, 10, 14, 17], "local_ip": [4, 12], "dedupl": 4, "so": [4, 8, 11, 15, 17], "onli": [4, 6, 12, 14, 17, 18], "one": [4, 7, 12, 17], "In": 4, "case": [4, 17], "consid": [4, 7], "device_id": [4, 12], "first": [4, 12], "prefer": 4, "how": 4, "connectz": 4, "attemp": 4, "either": [4, 17], "hashicorp": 4, "vault": 4, "lookup": [4, 7, 9, 10, 12], "commun": [4, 9], "hashi_vault": 4, "stale": [4, 10, 11], "devic": [4, 11, 12], "haven": [4, 11], "t": [4, 11, 17], "check": [4, 9, 10], "15": [4, 11, 12, 13, 14], "last_seen": [4, 10, 11, 12], "15d": [4, 10, 11], "run": [4, 6], "ebpf": 4, "linux_sensor_mod": [4, 12], "windows_host": 4, "aws_us_west_2": 4, "zone_group": [4, 12], "west": [4, 12], "amazon": [4, 6, 12], "system_manufactur": [4, 12], "serial_numb": [4, 12], "prevent": [4, 6, 10, 12, 17], "reachabl": 4, "attribut": [4, 11, 17], "similar": 5, "falconctl": [5, 13], "cli": 5, "aid": [5, 6, 9, 10, 12, 13, 15], "apd": [5, 6], "aph": [5, 6], "app": [5, 6], "trace": [5, 6], "featur": [5, 6], "metadata_queri": 5, "message_log": [5, 6], "bill": [5, 6], "rfm_state": 5, "rfm_reason": 5, "backend": [5, 6], "subset": 5, "crowdstik": [5, 19], "consist": [5, 17], "null": 5, "53abc1234c584115a46efc25dd831a2b": 5, "gabriel": [5, 6], "alford": [5, 6], "redhatris": [5, 6], "system": [6, 12, 16, 17], "whether": [6, 9, 10, 19], "like": 6, "delet": 6, "associ": [6, 7, 8, 12, 13, 14, 16, 18, 19], "prepar": 6, "master": 6, "imag": 6, "clone": 6, "virtual": [6, 12], "appli": [6, 12], "state": [6, 9, 12], "absent": 6, "proxi": 6, "applic": [6, 17], "port": 6, "wa": [6, 12, 14, 19], "introduc": 6, "bpf": 6, "46": 6, "auto": 6, "kernel": [6, 12, 13], "pai": 6, "As": [6, 17], "go": 6, "model": 6, "workload": 6, "your": [6, 8, 11, 13, 14, 18], "web": 6, "servic": [6, 12], "googl": 6, "gcp": [6, 14], "microsoft": 6, "azur": 6, "ephemer": 6, "activ": [6, 7], "month": 6, "meter": 6, "rather": 6, "than": [6, 7, 10, 12], "full": [6, 14, 17], "annual": 6, "contract": 6, "price": 6, "per": [6, 10], "flag": [6, 12, 17], "enablelog": 6, "disablelogbuff": 6, "log": 6, "messag": [6, 9, 10], "disk": 6, "provisioning_token": 6, "unauthor": 6, "being": 6, "accident": 6, "malici": 6, "secur": 6, "measur": 6, "paramt": 6, "requir": 6, "suppli": 6, "ensur": [6, 17], "present": 6, "identifi": [6, 7, 12, 14, 18, 19], "comma": 6, "length": [6, 9, 10], "cannot": [6, 17], "exce": 6, "256": 6, "charact": 6, "appropri": 6, "level": [6, 17], "err": 6, "warn": 6, "info": [6, 14], "debug": [6, 8, 11, 15], "1234567890abcdef1234567890abcdef": 6, "provis": 6, "12345678": 6, "prep": 6, "com": [6, 7, 13, 19], "8080": 6, "5": [7, 8, 14], "fetch": [7, 13], "fctl_child_cid": [7, 13], "obtain": [7, 17], "get": [7, 8, 9, 10, 13, 17], "singl": [7, 9, 12], "12345678901234567890": [7, 9, 10, 12, 15], "09876543210987654321": [7, 9, 10, 12, 15], "secondari": [7, 8], "child_cid": 7, "checksum": [7, 13, 16], "xy": 7, "child_gcid": 7, "global": 7, "g12345678901234567890": 7, "child_of": 7, "domain": 7, "statu": [7, 12], "pass": [8, 10], "describ": [8, 11, 15], "These": [8, 11, 13, 14, 15], "key1": [8, 11, 15], "value1": [8, 11, 15], "key2": [8, 11, 15], "value2": [8, 11, 15], "posit": [8, 11, 15], "togeth": [8, 11, 15], "befor": [8, 11, 15], "term1": [8, 11, 15], "term2": [8, 11, 15], "handl": [8, 9, 10, 11], "pagin": [8, 11], "do": [8, 11, 17], "worri": [8, 11], "print": [8, 11, 15], "msg": [8, 9, 10, 11, 15], "123456789abcdefg": 8, "fctl_child_cid_info": [8, 13], "restrict": 9, "compromis": 9, "lift": 9, "restor": 9, "its": [9, 12, 17], "regular": 9, "capabl": 9, "successful": [9, 10], "fail": [9, 10, 17], "write": [9, 10, 15, 17], "host_id": [9, 10, 12, 13], "match": [9, 10, 11, 12, 14, 16, 19], "criteria": [9, 10, 11, 12, 14, 16, 19], "failur": [9, 10], "some": [9, 10, 12, 17], "could": [9, 10], "popul": [9, 10], "failed_host": [9, 10], "relev": [9, 10], "design": [9, 10], "greater": [9, 10], "flexibl": [9, 10], "especi": [9, 10], "loop": [9, 10, 17], "explicitli": [9, 10], "contain_filt": 9, "linux_rfm_filt": 9, "individu": [9, 10], "save": [9, 10, 17], "contain_result": 9, "code": [9, 10], "were": [9, 10], "successfulli": [9, 10], "visibl": 10, "unnecessari": 10, "detect": 10, "inact": 10, "opt": 10, "uninstal": [10, 15], "deactiv": 10, "resum": 10, "unhidden": 10, "hidden": [10, 11], "100": 10, "mean": 10, "them": [10, 17], "batch": 10, "larg": 10, "number": [10, 12, 17], "take": 10, "time": [10, 12], "complet": [10, 17, 18], "30": 10, "stale_filt": [10, 11], "hide_result": 10, "search": [11, 12], "find": 11, "modul": 11, "escap": 11, "doubl": 11, "quot": [11, 17], "multilin": 11, "hide": [11, 13], "host_hid": [11, 13], "softwar": 12, "o": [12, 14, 16, 17], "maco": 12, "network": [12, 13], "mac": [12, 18], "windows_host_filt": 12, "agent_load_flag": 12, "indic": 12, "load": 12, "agent_local_tim": 12, "2024": 12, "03": [12, 19], "15t03": 12, "06": 12, "29": 12, "257z": 12, "agent_vers": 12, "16405": 12, "bios_manufactur": 12, "manufactur": 12, "bio": 12, "xen": 12, "bios_vers": 12, "chassis_typ": 12, "chassi": 12, "chassis_type_desc": 12, "d78cd791785442a98ec75249d8c385dd": [12, 19], "config_id_bas": 12, "65994763": 12, "config_id_build": 12, "config_id_platform": 12, "8": [12, 14, 17], "connection_ip": 12, "10": [12, 19], "connection_mac_address": 12, "b0": 12, "44": 12, "4e": 12, "a5": 12, "cpu_signatur": 12, "signatur": 12, "cpu": 12, "198386": 12, "cpu_vendor": 12, "vendor": [12, 14], "default_gateway_ip": 12, "gatewai": 12, "deployment_typ": 12, "deploy": 12, "standard": 12, "device_polici": 12, "polici": [12, 13, 14, 15, 17, 18], "applied_d": 12, "2017": 12, "09": 12, "14t13": 12, "45": 12, "823683755z": 12, "assigned_d": 12, "33": 12, "038805882z": 12, "policy_id": 12, "aaabbbdddcccddd": 12, "policy_typ": 12, "settings_hash": 12, "ed4a7460": 12, "sensor_upd": 12, "14t05": 12, "20": [12, 14, 16], "847887649z": 12, "40": 12, "878196578z": 12, "updat": [12, 13, 14, 15, 17, 18], "65994753": 12, "first_seen": 12, "timestamp": [12, 14, 19], "30z": 12, "group_hash": 12, "hash": [12, 17], "belong": 12, "aaabbbdddcccdddeeefff": 12, "instance_id": 12, "instanc": [12, 17], "ab89723sdf87": 12, "kernel_vers": 12, "79": 12, "99": 12, "164": 12, "amzn2023": 12, "x86_64": [12, 14, 16], "41z": 12, "mac_address": 12, "major_vers": 12, "major": 12, "meta": 12, "addit": 12, "metadata": 12, "version_str": 12, "1239010923": 12, "minor_vers": 12, "minor": 12, "modified_timestamp": [12, 14, 19], "08": 12, "21z": 12, "os_vers": [12, 16], "oper": [12, 15, 16, 17], "2023": 12, "platform_id": 12, "41": 12, "651213667z": 12, "rule_group": 12, "rule": [12, 17, 19], "aaabbbdddcccdddee": 12, "product_type_desc": 12, "product": 12, "serial": 12, "aaaaaa": 12, "bbbb": 12, "cccc": 12, "dddd": 12, "eeeeeeeeeeee": 12, "service_provid": 12, "aws_ec2_v2": 12, "service_provider_account_id": 12, "account": 12, "112233445566": 12, "normal": 12, "vmware": 12, "inc": 12, "system_product_nam": 12, "tag1": 12, "tag2": 12, "zone": 12, "2a": 12, "collect": 13, "serv": 13, "comprehens": 13, "toolkit": 13, "streamlin": 13, "interact": 13, "author": 13, "crwd": 13, "solut": 13, "architectur": [13, 14, 16], "integr": 13, "newer": [13, 14], "cid_info": 13, "falconctl_info": 13, "retriev": [13, 14, 15], "flight": 13, "child": 13, "host_contain": 13, "unhid": 13, "consol": 13, "host_info": 13, "kernel_support_info": 13, "sensor_download": 13, "sensor_download_info": [13, 17], "sensor_update_builds_info": 13, "sensor_update_policy_info": 13, "maintenance_token": 13, "mainten": 13, "doc": [14, 16], "distinct": 14, "proper": 14, "show": 14, "ubuntu": [14, 16], "releas": [14, 16], "distro": 14, "ubuntu20": 14, "1040": 14, "ansible_fact": 14, "base_package_supported_sensor_vers": 14, "packag": 14, "x": [14, 16], "yy": [14, 16], "z": [14, 16], "1101": 14, "1102": 14, "created_timestamp": [14, 19], "2021": [14, 16, 19], "01": [14, 16], "00": [14, 16, 19], "distribut": 14, "distro_vers": 14, "18": [14, 16], "flavor": 14, "8s0t9k3zr2o7h5x1d4g6nqjfywlbepmau": 14, "95": 14, "smp": 14, "wed": 14, "sep": 14, "9": [14, 17], "51": 14, "28": 14, "utc": 14, "2020": [14, 17], "ztl_module_supported_sensor_vers": 14, "ztl": 14, "method": [14, 17], "without": [14, 17], "modif": 14, "deploi": 14, "offset": 14, "upgrad": 14, "ztl_supported_sensor_vers": 14, "zero": [14, 17], "touch": 14, "through": 14, "channel": 14, "done": 15, "bulk": 15, "One": [15, 17], "sort": [16, 19], "properti": [16, 19], "desc": 16, "zlinux": [16, 18], "s390x": 16, "04": 16, "file_s": 16, "size": 16, "byte": [16, 17], "123456789": 16, "file_typ": 16, "rpm": 16, "11404": 16, "el7": 16, "22": 16, "release_d": 16, "date": 16, "01t00": [16, 19], "00z": [16, 19], "sha256": [16, 17], "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef": 16, "copi": 17, "target": 17, "win_copi": 17, "attr": 17, "filesystem": 17, "object": 17, "look": 17, "man": 17, "page": 17, "chattr": 17, "displai": 17, "lsattr": 17, "assum": 17, "dest": 17, "directori": 17, "temporari": 17, "own": 17, "fed": 17, "chown": 17, "left": 17, "unspecifi": 17, "unless": 17, "preserv": 17, "previou": 17, "ownership": 17, "permiss": 17, "usr": 17, "bin": 17, "chmod": 17, "rememb": 17, "actual": 17, "octal": 17, "give": 17, "enough": 17, "pars": 17, "correctli": 17, "644": 17, "1777": 17, "receiv": 17, "convers": 17, "0755": 17, "sometim": 17, "circumst": 17, "decim": 17, "unexpect": 17, "symbol": 17, "rwx": 17, "rw": 17, "r": 17, "destin": 17, "umask": 17, "newli": 17, "best": 17, "wai": 17, "correct": 17, "cve": 17, "1736": 17, "sensor_6": 17, "78": 17, "12345": 17, "deb": 17, "owner": 17, "numer": 17, "usernam": 17, "confus": 17, "selevel": 17, "selinux": 17, "context": 17, "ml": 17, "mc": 17, "known": 17, "rang": 17, "_default": 17, "portion": 17, "serol": 17, "role": 17, "setyp": 17, "seuser": 17, "where": 17, "unsafe_writ": 17, "influenc": 17, "atom": 17, "corrupt": 17, "inconsist": 17, "just": 17, "broken": 17, "docker": 17, "mount": 17, "insid": 17, "written": 17, "unsaf": 17, "manner": 17, "fall": 17, "back": 17, "howev": 17, "doesn": 17, "forc": 17, "import": 17, "subject": 17, "race": 17, "implement": 17, "lock": 17, "safe": 17, "concurr": 17, "simultan": 17, "subsequ": 17, "task": 17, "1234567890123456789012345678901234567890123456789012345678901234": 17, "ex": 17, "0644": 17, "tmpzy7hn29t": 17, "linuxarm64": 18, "stage": 18, "prod": 18, "early_adopt": 18, "16410": 18, "n": [18, 19], "sensor_vers": 18, "49": 18, "16303": 18, "assend": 19, "asc": 19, "arrai": 19, "created_bi": 19, "who": 19, "assignment_rul": 19, "demo": 19, "win10": 19, "group_typ": 19, "static": 19, "modified_bi": 19, "frank": 19, "falor": 19, "ffalor": 19}, "objects": {"": [[2, 0, 1, "-", "ANSIBLE_INVENTORY_USE_EXTRA_VARS"]]}, "objtypes": {"0": "std:envvar"}, "objnames": {"0": ["std", "envvar", "environment variable"]}, "titleterms": {"crowdstrik": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "falcon": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "auth": 0, "modul": [0, 1, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 18, 19], "manag": 0, "authent": 0, "synopsi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "requir": [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "paramet": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "exampl": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "return": [0, 1, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "valu": [0, 1, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "author": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "collect": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "link": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19], "cid_info": 1, "get": [1, 5, 12, 14, 16, 18, 19], "cid": [1, 7, 8], "checksum": 1, "index": [2, 13], "all": 2, "environ": 2, "variabl": 2, "falcon_discov": 3, "inventori": [3, 4, 13], "discov": 3, "sourc": [3, 4], "note": [3, 4, 8, 9, 10, 11, 14, 15, 17], "falcon_host": 4, "host": [4, 9, 10, 11, 12], "falconctl_info": 5, "associ": 5, "sensor": [5, 6, 14, 16, 17, 18, 19], "falconctl": 6, "configur": 6, "fctl_child_cid_info": 7, "retriev": 7, "detail": 7, "about": [7, 12, 14, 16, 19], "flight": [7, 8], "control": [7, 8], "child": [7, 8], "fctl_child_cid": 8, "lookup": [8, 11, 13, 15], "fetch": [8, 11, 15], "term": [8, 11, 15], "keyword": [8, 11, 15], "host_contain": 9, "network": 9, "contain": 9, "host_hid": 10, "hide": 10, "unhid": 10, "from": 10, "consol": 10, "host_id": 11, "id": 11, "aid": 11, "host_info": 12, "inform": [12, 14, 16, 19], "descript": 13, "plugin": 13, "kernel_support_info": 14, "kernel": 14, "support": 14, "linux": 14, "maintenance_token": 15, "mainten": 15, "token": 15, "sensor_download_info": 16, "instal": [16, 17], "sensor_download": 17, "download": 17, "sensor_update_builds_info": 18, "list": 18, "avail": 18, "build": 18, "version": 18, "sensor_update_policy_info": 19, "updat": 19, "polici": 19}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"crowdstrike.falcon.auth module \u2013 Manage authentication": [[0, "crowdstrike-falcon-auth-module-manage-authentication"]], "Synopsis": [[0, "synopsis"], [1, "synopsis"], [3, "synopsis"], [4, "synopsis"], [5, "synopsis"], [6, "synopsis"], [7, "synopsis"], [8, "synopsis"], [9, "synopsis"], [10, "synopsis"], [11, "synopsis"], [12, "synopsis"], [14, "synopsis"], [15, "synopsis"], [16, "synopsis"], [17, "synopsis"], [18, "synopsis"], [19, "synopsis"]], "Requirements": [[0, "requirements"], [1, "requirements"], [3, "requirements"], [4, "requirements"], [7, "requirements"], [8, "requirements"], [9, "requirements"], [10, "requirements"], [11, "requirements"], [12, "requirements"], [14, "requirements"], [15, "requirements"], [16, "requirements"], [17, "requirements"], [18, "requirements"], [19, "requirements"]], "Parameters": [[0, "parameters"], [1, "parameters"], [3, "parameters"], [4, "parameters"], [5, "parameters"], [6, "parameters"], [7, "parameters"], [9, "parameters"], [10, "parameters"], [12, "parameters"], [14, "parameters"], [16, "parameters"], [17, "parameters"], [18, "parameters"], [19, "parameters"]], "Examples": [[0, "examples"], [1, "examples"], [3, "examples"], [4, "examples"], [5, "examples"], [6, "examples"], [7, "examples"], [8, "examples"], [9, "examples"], [10, "examples"], [11, "examples"], [12, "examples"], [14, "examples"], [15, "examples"], [16, "examples"], [17, "examples"], [18, "examples"], [19, "examples"]], "Return Values": [[0, "return-values"], [1, "return-values"], [5, "return-values"], [7, "return-values"], [9, "return-values"], [10, "return-values"], [12, "return-values"], [14, "return-values"], [16, "return-values"], [17, "return-values"], [18, "return-values"], [19, "return-values"]], "Authors": [[0, "authors"], [1, "authors"], [3, "authors"], [4, "authors"], [5, "authors"], [6, "authors"], [7, "authors"], [8, "authors"], [9, "authors"], [10, "authors"], [11, "authors"], [12, "authors"], [14, "authors"], [15, "authors"], [16, "authors"], [17, "authors"], [18, "authors"], [19, "authors"]], "Collection links": [[0, "collection-links"], [1, "collection-links"], [3, "collection-links"], [4, "collection-links"], [5, "collection-links"], [6, "collection-links"], [7, "collection-links"], [8, "collection-links"], [9, "collection-links"], [10, "collection-links"], [11, "collection-links"], [12, "collection-links"], [14, "collection-links"], [15, "collection-links"], [16, "collection-links"], [17, "collection-links"], [18, "collection-links"], [19, "collection-links"]], "crowdstrike.falcon.cid_info module \u2013 Get CID with checksum": [[1, "crowdstrike-falcon-cid-info-module-get-cid-with-checksum"]], "Index of all Collection Environment Variables": [[2, "index-of-all-collection-environment-variables"]], "crowdstrike.falcon.falcon_discover inventory \u2013 CrowdStrike Falcon Discover inventory source": [[3, "crowdstrike-falcon-falcon-discover-inventory-crowdstrike-falcon-discover-inventory-source"]], "Notes": [[3, "notes"], [4, "notes"], [8, "notes"], [9, "notes"], [10, "notes"], [11, "notes"], [14, "notes"], [15, "notes"], [17, "notes"]], "crowdstrike.falcon.falcon_hosts inventory \u2013 CrowdStrike Falcon Hosts inventory source": [[4, "crowdstrike-falcon-falcon-hosts-inventory-crowdstrike-falcon-hosts-inventory-source"]], "crowdstrike.falcon.falconctl_info module \u2013 Get values associated with Falcon sensor.": [[5, "crowdstrike-falcon-falconctl-info-module-get-values-associated-with-falcon-sensor"]], "crowdstrike.falcon.falconctl module \u2013 Configure CrowdStrike Falcon Sensor": [[6, "crowdstrike-falcon-falconctl-module-configure-crowdstrike-falcon-sensor"]], "crowdstrike.falcon.fctl_child_cid_info module \u2013 Retrieve details about Flight Control child CIDs": [[7, "crowdstrike-falcon-fctl-child-cid-info-module-retrieve-details-about-flight-control-child-cids"]], "crowdstrike.falcon.fctl_child_cids lookup \u2013 fetch Flight Control child CIDs": [[8, "crowdstrike-falcon-fctl-child-cids-lookup-fetch-flight-control-child-cids"]], "Terms": [[8, "terms"], [11, "terms"], [15, "terms"]], "Keyword parameters": [[8, "keyword-parameters"], [11, "keyword-parameters"], [15, "keyword-parameters"]], "Return Value": [[8, "return-value"], [11, "return-value"], [15, "return-value"]], "crowdstrike.falcon.host_contain module \u2013 Network contain hosts in Falcon": [[9, "crowdstrike-falcon-host-contain-module-network-contain-hosts-in-falcon"]], "crowdstrike.falcon.host_hide module \u2013 Hide/Unhide hosts from the Falcon console": [[10, "crowdstrike-falcon-host-hide-module-hide-unhide-hosts-from-the-falcon-console"]], "crowdstrike.falcon.host_ids lookup \u2013 fetch host IDs (AIDs)": [[11, "crowdstrike-falcon-host-ids-lookup-fetch-host-ids-aids"]], "crowdstrike.falcon.host_info module \u2013 Get information about Falcon hosts": [[12, "crowdstrike-falcon-host-info-module-get-information-about-falcon-hosts"]], "Crowdstrike.Falcon": [[13, "crowdstrike-falcon"]], "Description": [[13, "description"]], "Plugin Index": [[13, "plugin-index"]], "Modules": [[13, "modules"]], "Inventory Plugins": [[13, "inventory-plugins"]], "Lookup Plugins": [[13, "lookup-plugins"]], "crowdstrike.falcon.kernel_support_info module \u2013 Get information about kernels supported by the Falcon Sensor for Linux": [[14, "crowdstrike-falcon-kernel-support-info-module-get-information-about-kernels-supported-by-the-falcon-sensor-for-linux"]], "crowdstrike.falcon.maintenance_token lookup \u2013 fetch maintenance token": [[15, "crowdstrike-falcon-maintenance-token-lookup-fetch-maintenance-token"]], "crowdstrike.falcon.sensor_download_info module \u2013 Get information about Falcon Sensor Installers": [[16, "crowdstrike-falcon-sensor-download-info-module-get-information-about-falcon-sensor-installers"]], "crowdstrike.falcon.sensor_download module \u2013 Download Falcon Sensor Installer": [[17, "crowdstrike-falcon-sensor-download-module-download-falcon-sensor-installer"]], "crowdstrike.falcon.sensor_update_builds_info module \u2013 Get a list of available sensor build versions": [[18, "crowdstrike-falcon-sensor-update-builds-info-module-get-a-list-of-available-sensor-build-versions"]], "crowdstrike.falcon.sensor_update_policy_info module \u2013 Get information about Falcon Update Sensor Policies": [[19, "crowdstrike-falcon-sensor-update-policy-info-module-get-information-about-falcon-update-sensor-policies"]]}, "indexentries": {"ansible_inventory_use_extra_vars": [[2, "envvar-ANSIBLE_INVENTORY_USE_EXTRA_VARS"], [3, "index-9"], [4, "index-9"]], "environment variable": [[2, "envvar-ANSIBLE_INVENTORY_USE_EXTRA_VARS"], [3, "index-0"], [3, "index-1"], [3, "index-2"], [3, "index-3"], [3, "index-4"], [3, "index-5"], [3, "index-6"], [3, "index-7"], [3, "index-8"], [3, "index-9"], [4, "index-0"], [4, "index-1"], [4, "index-2"], [4, "index-3"], [4, "index-4"], [4, "index-5"], [4, "index-6"], [4, "index-7"], [4, "index-8"], [4, "index-9"]], "ansible_cache_plugin": [[3, "index-3"], [4, "index-3"]], "ansible_cache_plugin_connection": [[3, "index-1"], [4, "index-1"]], "ansible_cache_plugin_prefix": [[3, "index-5"], [4, "index-5"]], "ansible_cache_plugin_timeout": [[3, "index-7"], [4, "index-7"]], "ansible_inventory_cache": [[3, "index-0"], [4, "index-0"]], "ansible_inventory_cache_connection": [[3, "index-2"], [4, "index-2"]], "ansible_inventory_cache_plugin": [[3, "index-4"], [4, "index-4"]], "ansible_inventory_cache_plugin_prefix": [[3, "index-6"], [4, "index-6"]], "ansible_inventory_cache_timeout": [[3, "index-8"], [4, "index-8"]]}})
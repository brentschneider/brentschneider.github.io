---
title: "Using diskutil from the command line"
permalink: /blog/:title
quote: command line tips for the Mac
image: /img/media/2014-08-05-Using-diskutil-from-the-command-line/cover.jpg
---

Disk Utility is an application that's built into OS X, located in the Macintosh HD > Applications > Utilities folder.
Among other things, it is also native to the command line.
<br />
<br />
Lets start with finding the list of drives (volumes) on the system:
`diskutil list`


<pre>

/dev/disk0
|    #:    |         TYPE NAME        |   SIZE   |  IDENTIFIER |
|----------|--------------------------|----------|-------------|
|    0:    |  Apple_partition_scheme  | *74.5 Gi |    disk0    |
|    1:    |    Apple_partition_map   |  31.5 Ki |    disk0s1  |
|    2:    |  Apple_HFS Macintosh HD  |  74.4 Gi |    disk0s3  |

</pre>

For more detailed information on a particular disk or partition, use:<br />
`diskutil info [disk-or-partition]`


Checking the partitions problems and repairing them

First check:<br />
`diskutil verifyPermissions partition`

If errors are you found, you can fix them with:
`diskutil repairPermissions partition`
<br />
<br />

### Other options for mounting and unmtounting volumes, reformating, and erase data.

```
__u[n]mount__ - Unmount a single volume
__unmountDisk__ - Unmount an entire disk (all volumes)
__eject__ - Eject a removable disk
__mount__ - Mount a single volume
__mountDisk__ - Mount an entire disk (all mountable volumes)
__eraseDisk__ - Erase an existing disk, removing all volumes
__eraseVolume__ - Erase an existing volume
__reformat__ - Reformat an existing volume
__zeroDisk__ - Erase a disk, writing zeros to the media
__secureErase__ - Securely erase a disk or freespace on a volum
```

In the command line, look up the full list of features for diskutil

`man diskutil`
